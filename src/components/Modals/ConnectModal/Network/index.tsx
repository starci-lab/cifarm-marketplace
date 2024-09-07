"use client"
import { Tabs, Tab } from "@nextui-org/react"
import React from "react"

export const Network = () => {
    return (
        <Tabs aria-label="Network">
            <Tab key="mainnet" title="Mainnet" />
            <Tab key="testnet" title="Testnet" />
        </Tabs>
    )
}
