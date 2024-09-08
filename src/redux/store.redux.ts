import { configureStore } from "@reduxjs/toolkit"
import {
    miscellaneousReducer,
    authReducer,
    chainReducer,
    tabReducer,
    resultReducer,
    vaaReducer,
    refreshReducer,
    appReducer
} from "./slices"

export const store = configureStore({
    reducer: {
        miscellaneousReducer,
        authReducer,
        chainReducer,
        tabReducer,
        resultReducer,
        vaaReducer,
        refreshReducer,
        appReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
