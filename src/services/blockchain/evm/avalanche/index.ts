import { Network } from "@/services"
import { _checkMinter, _getBalance } from "../common"
import { chainConfig } from "@/config"

export const avalancheExplorerUrls = (
    value: string,
    network: Network = Network.Testnet
) => {
    switch (network) {
    case Network.Devnet:
        throw new Error("Devnet is not supported for Avalanche")
    case Network.Testnet:
        return {
            address: `https://testnet.snowtrace.io/address/${value}`,
            tx: `https://testnet.snowtrace.io/tx/${value}`,
        }
    case Network.Mainnet:
        return {
            address: `https://snowtrace.io/address/${value}`,
            tx: `https://snowtrace.io/tx/${value}`,
        }
    }
}

export const AVALANCHE_TESTNET_RPC_URL = "https://api.avax-test.network/ext/bc/C/rpc"
export const AVALANCHE_MAINNET_RPC_URL = "https://api.avax.network/ext/bc/C/rpc"

export const getAvalancheRpc = (network: Network) => {
    let rpcUrl = ""
    switch (network) {
    case Network.Mainnet:
    {
        rpcUrl = AVALANCHE_MAINNET_RPC_URL
        break
    }
                
    case Network.Testnet:
    {
        rpcUrl = AVALANCHE_TESTNET_RPC_URL
        break
    }
    case Network.Devnet:
        throw new Error("Devnet is not supported for Avalanche")
    }
    return rpcUrl
}

export const getAvalancheBalance = async (
    accountAddress: string,
    tokenAddress: string,
    network: Network = Network.Testnet
) => {
    const rpcUrl = getAvalancheRpc(network)
    return _getBalance(accountAddress, tokenAddress, rpcUrl, chainConfig().chains.avalanche.tokens[0].decimals)
}

export const checkAvalancheMinter = async (
    accountAddress: string,
    nftAddress: string,
    network: Network = Network.Testnet
) => {
    const rpcUrl = getAvalancheRpc(network)
    return _checkMinter(accountAddress, nftAddress, rpcUrl)
}