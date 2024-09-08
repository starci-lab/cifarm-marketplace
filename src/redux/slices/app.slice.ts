import { sha256Hash } from "@/services"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface PremiumTileMetadata {
    growthTimeReduction: number;
    pestResistance: number;
    productivityIncrease: number;
    weedResistance: number;
}

export interface NFT {
    tokenId: number,
    nftKey: string,
    tokenURI: string,
    listed: boolean,
}

export interface Collection {
    nfts: Array<NFT>
    nftKey: string
}

export interface Profile {
    collections: Record<string, Collection>
}

export interface BaseState {
    profile: Profile 
    saveProfileKey: number
}

const initialState: BaseState = {
    profile: {
        collections: {

        }
    },
    saveProfileKey: 0
}

export const profileKey = (chainKey: string, address: string) => sha256Hash(chainKey+address, "profile")

export interface ImportNFTParams {
    nftKey: string,
    nft: NFT
}

export const appSlice = createSlice({
    name: "appReducer",
    initialState,
    reducers: {
        setProfile: (state, { payload }: PayloadAction<Profile>) => {
            state.profile = payload
        },
        triggerSaveProfile: (state) => {
            state.saveProfileKey++
        },
        importNFT: (state, { payload }: PayloadAction<ImportNFTParams>) => {
            let collection = state.profile.collections[payload.nftKey]
            if (!collection) collection = {
                nftKey: payload.nftKey,
                nfts: [ payload.nft ]
            }
            state.profile.collections[payload.nftKey] = collection
        }
    },
})

export const {
    setProfile,
    triggerSaveProfile,
    importNFT
} = appSlice.actions
export const appReducer = appSlice.reducer
