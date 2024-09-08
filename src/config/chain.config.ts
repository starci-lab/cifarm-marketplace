import { Chain } from "@wormhole-foundation/sdk"

export enum Network {
  Devnet = "Devnet",
  Testnet = "Testnet",
  Mainnet = "Mainnet",
}

export const chainConfig = (): ChainConfig => {
    return {
        chains: {
            avalanche: {
                key: "avalanche",
                chain: "Avalanche",
                imageUrl: "/icons/avalanche.svg",
                name: "Avalanche",
                nftContracts: {
                    premiumTile: {
                        key: "premiumTile",
                        addresses: {
                            [Network.Devnet]: "",
                            [Network.Testnet]: "0xA871f915Dc331797d12625277Cd7Ae1cbad9f05d",
                            [Network.Mainnet]: "",
                        },
                        name: "Premium Tile NFT",
                        imageUrl: "/icons/premium-tile.png",
                    },
                },
                providers: [
                    {
                        key: "metaMask",
                        name: "MetaMask",
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
export const defaultProviderKey =
  chainConfig().chains[defaultChainKey].providers[0].key
export const defaultNftKey = Object.keys(
    chainConfig().chains[defaultChainKey].nftContracts
)[0]

export interface ChainInfo {
  key: string;
  chain: Chain;
  name: string;
  imageUrl: string;
  providers: Array<ProviderInfo>;
  nftContracts: Record<string, NftContractInfo>;
}

export interface ProviderInfo {
  key: string;
  imageUrl: string;
  name: string;
}

export interface NftContractInfo {
  key: string;
  imageUrl: string;
  name: string;
  addresses: Record<Network, string>;
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
