"use client"
import { Tab, Tabs } from "@nextui-org/react"
import React from "react"

export const UnderNavbar = () => {
    return (
        <div>
            <div className="px-6">
                <Tabs classNames={{
                    cursor: "w-full",
                    tabList: "p-0"
                }} color="primary" variant="underlined" aria-label="Section">
                    <Tab key="premiumTiles" title="Premium Tiles" />
                    <Tab key="manangement" title="Manangement" />
                </Tabs>
            </div>
        </div>
    )
}