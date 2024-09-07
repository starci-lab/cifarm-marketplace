import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export enum AdminTab {
    Mint = "mint",
    Burn = "burn",
}

export interface TabState {
    adminTab: AdminTab
}

const initialState: TabState = {
    adminTab: AdminTab.Mint
}

export const tabSlice = createSlice({
    name: "tabReducer",
    initialState,
    reducers: {
        switchAdminTab: (state, { payload }: PayloadAction<AdminTab>) => {
            state.adminTab = payload
        }
    }
})

export const { switchAdminTab } = tabSlice.actions
export const tabReducer = tabSlice.reducer