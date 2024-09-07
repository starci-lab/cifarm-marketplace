"use client"
import { ManagementTab, switchManagementTab, useAppDispatch, useAppSelector } from "@/redux"
import { Tabs, Tab } from "@nextui-org/react"
import React from "react"
import { Create } from "./Create"

const Page = () => {
    const dispatch = useAppDispatch()
    const managementTab = useAppSelector(state => state.tabReducer.managementTab)
    
    const renderContent = () => {
        const map: Record<ManagementTab, JSX.Element> = {
            [ManagementTab.Create]: <Create />,
            [ManagementTab.Edit]: <Create/>
        }
        return map[managementTab]
    }
    return (
        <div className="p-6 grid grid-cols-6 gap-12">
            <Tabs fullWidth selectedKey={managementTab} onSelectionChange={(key) => {
                dispatch(switchManagementTab(key.toString() as ManagementTab))
            }}  isVertical  variant="light" color="primary" aria-label="Section">
                <Tab key="create" title="Create" />
                <Tab key="edit" title="Edit" />
            </Tabs>     
            <div className="col-span-5">
                {renderContent()}
            </div>
        </div>
    )
}

export default Page