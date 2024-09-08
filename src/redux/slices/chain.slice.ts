import {
    ChainInfo,
    Network,
    chainConfig,
    defaultChainKey,
    defaultProviderKey,
} from "@/config"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface ChainState {
  network: Network;
  chainKey: string;
  providerKey: string;
  nftKey: string;
  chains: Record<string, ChainInfo>;
  saveChainsKey: number;
}

export interface ChainCredential {
  address: string;
  privateKey: string;
  publicKey: string;
}

export type ChainCredentials = Record<string, ChainCredential>;

const initialState: ChainState = {
    chainKey: defaultChainKey,
    network: Network.Testnet,
    providerKey: defaultProviderKey,
    nftKey: defaultChainKey,
    chains: chainConfig().chains,
    saveChainsKey: 0,
}

export const chainSlice = createSlice({
    name: "chainReducer",
    initialState,
    reducers: {
        setChainKey: (state, { payload }: PayloadAction<string>) => {
            state.chainKey = payload
        },
        setChain: (state, { payload }: { payload: Record<string, ChainInfo> }) => {
            state.chains = payload
        },
        triggerSaveChains: (state) => {
            state.saveChainsKey++
        },
    },
})

export const {
    setChainKey,
    setChain,
    triggerSaveChains,
} = chainSlice.actions
export const chainReducer = chainSlice.reducer
