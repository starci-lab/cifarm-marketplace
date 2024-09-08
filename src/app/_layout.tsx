"use client"

import React, { PropsWithChildren } from "react"
import { NextUIProvider } from "@nextui-org/react"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "@/redux"
import { HooksProvider } from "@/hooks"
import { Modals } from "@/components"
import { MetaMaskProvider } from "@metamask/sdk-react"
import { ToastContainer } from "@/toasts"
export const WrappedLayout = ({
    children,
}: PropsWithChildren) => {
    return (
        <NextUIProvider>
            <MetaMaskProvider
                sdkOptions={{
                    dappMetadata: {
                        name: "Example React Dapp",
                        url: "http://localhost:3000/",
                    },
                }}
            >
                <ReduxProvider store={store}>
                    <HooksProvider>
                        {children}          
                        <Modals/>
                        <ToastContainer/>
                    </HooksProvider>  
                </ReduxProvider>      
            </MetaMaskProvider>
        </NextUIProvider>
    )
}