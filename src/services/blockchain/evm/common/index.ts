import { ContractTransactionResponse, ethers } from "ethers"
import { erc20Abi, nftAbi } from "../abi"
import { computeDenomination } from "@/utils"
import { getSeed } from "@/services/cryptography"
import { ChainAccount, MintNFTData } from "../../common"

export const _getBalance = async (
    accountAddress: string,
    tokenAddress: string,
    rpcUrl: string,
    decimals: number
) => {
    let amount: bigint = BigInt(0)
    const provider = new ethers.JsonRpcProvider(rpcUrl)
    if (tokenAddress === "native") {
        amount = await provider.getBalance(accountAddress)
    } else {
        const contract = new ethers.Contract(tokenAddress, erc20Abi, provider)
        const [_balance, _decimals] = await Promise.all([
            contract.balanceOf(accountAddress),
            contract.decimals(),
        ])
        amount = BigInt(_balance)
        decimals = Number(_decimals)
    }
    return computeDenomination(amount, decimals)
}

export const createEvmAccount = (
    mnemonic: string,
    accountNumber: number
): ChainAccount => {
    const seed = getSeed({
        mnemonic,
        accountNumber,
    })
    const account = ethers.HDNodeWallet.fromSeed(seed.subarray(0, 32)).derivePath(
        `m/44'/60'/0'/0/${accountNumber}`
    )
    return {
        address: account.address,
        privateKey: account.privateKey,
        publicKey: account.publicKey,
    }
}

export const _checkMinter = async (
    accountAddress: string,
    nftAddress: string,
    rpcUrl: string
): Promise<boolean> => {
    const provider = new ethers.JsonRpcProvider(rpcUrl)
    const contract = new ethers.Contract(nftAddress, nftAbi, provider)
    const minter = await contract.MINTER()
    return await contract.hasRole(minter, accountAddress)
}

export const _mintNFT = async (
    nftAddress: string,
    evmProvider: ethers.BrowserProvider,
    data: MintNFTData
): Promise<string> => {
    const signer = await evmProvider.getSigner()
    const contract = new ethers.Contract(nftAddress, nftAbi, signer)
    const { hash } = (await contract.mint(
        BigInt(data.tokenId),
        data.toAddress,
        data.cid
    )) as ContractTransactionResponse
    await evmProvider.waitForTransaction(hash)
    return hash
}
