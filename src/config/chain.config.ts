import { ChainId, Chain, Platform } from "@wormhole-foundation/sdk"

export const chainConfig = (): ChainConfig => {
    return {
        chains: {
            avalanche: {
                key: "avalanche",
                imageUrl: "/icons/avalanche.svg",
                wormholeChainId: 6,
                chain: "Avalanche",
                platform: "Evm",
                name: "Avalanche",
                tokens: [
                    {
                        key: "aptos-native",
                        address: "native",
                        imageUrl: "/icons/aptos.svg",
                        name: "Aptos",
                        symbol: "APT",
                        decimals: 8,
                    },
                ],
                providers: [
                    {
                        name: "MetaMask",
                        key: "metaMask",
                        imageUrl: "/icons/metamask.svg",
                    },
                ],
            },
            aptos: {
                key: "aptos",
                imageUrl: "/icons/aptos.svg",
                wormholeChainId: 22,
                chain: "Aptos",
                platform: "Aptos",
                name: "Aptos",
                tokens: [
                    {
                        key: "aptos-native",
                        address: "native",
                        imageUrl: "/icons/aptos.svg",
                        name: "Aptos",
                        symbol: "APT",
                        decimals: 8,
                    },
                ],
                providers: [],
            },
            solana: {
                key: "solana",
                imageUrl: "/icons/solana.svg",
                wormholeChainId: 1,
                chain: "Solana",
                platform: "Solana",
                name: "Solana",
                tokens: [
                    {
                        key: "solana-native",
                        address: "native",
                        imageUrl: "/icons/solana.svg",
                        name: "Solana",
                        symbol: "SOL",
                        decimals: 9,
                    },
                    {
                        key: "solana-usdc",
                        address: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
                        imageUrl: "/icons/usdc.svg",
                        name: "USD Coin",
                        symbol: "USDC",
                        decimals: 6,
                    },
                ],
                providers: [],
            },
            bsc: {
                key: "bsc",
                imageUrl: "/icons/bsc.svg",
                wormholeChainId: 4,
                chain: "Bsc",
                platform: "Evm",
                name: "Binance Smart Chain",
                tokens: [
                    {
                        key: "bsc-native",
                        address: "native",
                        imageUrl: "/icons/bsc.svg",
                        name: "Binance Coin",
                        symbol: "BNB",
                        decimals: 18,
                    },
                    {
                        key: "bsc-usdt",
                        address: "0xDcbA7F0D49885D5C9e7CDF3e27897a5F3cdfbf62",
                        imageUrl: "/icons/usdt.svg",
                        name: "USD Tether",
                        symbol: "USDT",
                        decimals: 18,
                    },
                ],
                providers: [
                    {
                        name: "MetaMask",
                        key: "metaMask",
                        imageUrl: "/icons/metamask.svg",
                    },
                ],
            },
        },
    }
}

export const chains = Object.keys(chainConfig().chains)
export const chainInfos = Object.values(chainConfig().chains)

export const defaultChainKey = chainConfig().chains[chains[0]].key
export const defaultChain = chainConfig().chains[chains[0]].chain
export const defaultSecondaryChainKey = chainConfig().chains[chains[1]].key
export const defaultSecondaryChain = chainConfig().chains[chains[1]].chain
export const defaultNativeTokenKey =
  chainConfig().chains[defaultChainKey].tokens[0].key
export const defaultSecondaryNativeTokenKey =
  chainConfig().chains[defaultSecondaryChainKey].tokens[0].key
export const defaultProviderKey =
  chainConfig().chains[defaultChainKey].providers[0].key

export interface ChainInfo {
  key: string;
  wormholeChainId: ChainId;
  imageUrl: string;
  chain: Chain;
  platform: Platform;
  name: string;
  tokens: Array<TokenInfo>;
  providers: Array<ProviderInfo>;
}

export interface ProviderInfo {
  key: string;
  imageUrl: string;
  name: string;
}

export interface TokenInfo {
  key: string;
  address: string;
  imageUrl: string;
  name: string;
  symbol: string;
  decimals: number;
}

export interface TokenInfos {
  tokens: Array<TokenInfo>;
}

export interface ChainConfig {
  chains: Record<string, ChainInfo>;
}
