import { Chain, chainToPlatform } from "@wormhole-foundation/sdk"
import { EvmTransactionContext, TransactionContext } from "../common"
import { Contract } from "ethers"
import { nftAbi } from "../abi"

export interface MintParams {
  contractAddress: string;
  toAddress: string;
  tokenId: number;
  cid: string;
  chain: Chain;
  context: TransactionContext;
}

export const mint = async ({
    chain,
    contractAddress,
    cid,
    toAddress,
    tokenId,
    context,
}: MintParams): Promise<string> => {
    const platform = chainToPlatform(chain)
    switch (platform) {
    case "Evm": {
        const { provider } = context as EvmTransactionContext
        const signer = await provider.getSigner()
        const contract = new Contract(contractAddress, nftAbi, signer)
        const { hash } = await contract
            .getFunction("mint")
            .send(BigInt(tokenId), toAddress, cid)
        await provider.waitForTransaction(hash)
        return hash
    }
    default:
        throw new Error(`Platform not supported: ${platform}`)
    }
}
