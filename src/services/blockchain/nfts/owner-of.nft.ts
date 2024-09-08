import { Chain, chainToPlatform } from "@wormhole-foundation/sdk"
import { Contract, JsonRpcProvider } from "ethers"
import { nftAbi } from "../abi"
import { evmRpc } from "../rpcs"
import { Network } from "@/config"
import { EvmChains } from "@wormhole-foundation/sdk-evm"

export interface OwnerOfParams {
  contractAddress: string;
  tokenId: number;
  chain: Chain;
  network: Network;
}

export const ownerOf = async ({
    chain,
    contractAddress,
    tokenId,
    network,
}: OwnerOfParams): Promise<string> => {
    const platform = chainToPlatform(chain)
    switch (platform) {
    case "Evm": {
        const rpc = evmRpc(chain as EvmChains, network)
        const provider = new JsonRpcProvider(rpc, network)
        const contract = new Contract(contractAddress, nftAbi, provider)
        return await contract.getFunction("ownerOf").staticCall(tokenId)
    }
    default:
        throw new Error(`Platform not supported: ${platform}`)
    }
}
