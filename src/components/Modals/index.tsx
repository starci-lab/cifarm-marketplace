"use client"

import React from "react"
import { ConnectModal } from "./ConnectModal"
import { ImportNFTModal } from "./ImportNFTModal"

export const Modals = () => {
    return (
        <div>
            <ConnectModal />
            <ImportNFTModal/>
        </div>
    )
}
