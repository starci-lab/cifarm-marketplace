"use client"
import { AdminTab, switchAdminTab, useAppDispatch, useAppSelector } from "@/redux"
import { Tabs, Tab } from "@nextui-org/react"
import React from "react"
import { Mint } from "./Mint"

const Page = () => {
    const dispatch = useAppDispatch()
    const adminTab = useAppSelector(state => state.tabReducer.adminTab)
    
    const renderContent = () => {
        const map: Record<AdminTab, JSX.Element> = {
            [AdminTab.Mint]: <Mint />,
            [AdminTab.Burn]: <Mint />
        }
        return map[adminTab]
    }
    return (
        <div className="p-6 grid grid-cols-6 gap-12">
            <Tabs fullWidth selectedKey={adminTab} onSelectionChange={(key) => {
                dispatch(switchAdminTab(key.toString() as AdminTab))
            }}  isVertical  variant="light" color="primary" aria-label="Section">
                <Tab key="mint" title="Mint" />
                <Tab key="burn" title="Burn" />
                <Tab key="grantRole" title="Grant Role" />
            </Tabs>     
            <div className="col-span-5">
                {renderContent()}
            </div>
        </div>
    )
}

export default Page