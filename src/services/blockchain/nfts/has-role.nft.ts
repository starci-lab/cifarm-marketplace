import { Chain, chainToPlatform } from "@wormhole-foundation/sdk"
import { Contract, JsonRpcProvider } from "ethers"
import { nftAbi } from "../abi"
import { evmRpc } from "../rpcs"
import { Network } from "@/config"
import { EvmChains } from "@wormhole-foundation/sdk-evm"

export enum Role {
    Minter="MINTER",
    Burner="BURNER"
}

export interface HasRoleParams {
  contractAddress: string;
  accountAddress: string;
  chain: Chain;
  network: Network;
  role: Role
}

export const hasRole = async ({
    chain,
    contractAddress,
    accountAddress,
    network,
    role
}: HasRoleParams): Promise<boolean> => {
    const platform = chainToPlatform(chain)
    switch (platform) {
    case "Evm": {
        const rpc = evmRpc(chain as EvmChains, network)
        const provider = new JsonRpcProvider(rpc, network)
        const contract = new Contract(contractAddress, nftAbi, provider)
        const minter = await contract.getFunction(role).staticCall()
        return await contract
            .getFunction("hasRole")
            .staticCall(minter, accountAddress)
    }
    default:
        throw new Error(`Platform not supported: ${platform}`)
    }
}
