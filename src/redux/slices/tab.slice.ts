import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export enum ManagementTab {
    Create = "create",
    Edit = "edit",
}

export interface TabState {
    managementTab: ManagementTab
}

const initialState: TabState = {
    managementTab: ManagementTab.Create
}

export const tabSlice = createSlice({
    name: "tabReducer",
    initialState,
    reducers: {
        switchManagementTab: (state, { payload }: PayloadAction<ManagementTab>) => {
            state.managementTab = payload
        }
    }
})

export const { switchManagementTab } = tabSlice.actions
export const tabReducer = tabSlice.reducer