"use client"

import { ProviderInfo } from "@/config"
import { useMetaMaskSwr, useProvider } from "@/hooks"
import {
    Card,
    CardBody,
    Image,
    Spinner,
} from "@nextui-org/react"
import React from "react"

export interface ProviderProps {
  providerInfo: ProviderInfo;
}

export const Provider = ({ providerInfo }: ProviderProps) => {
    //const { providerKey } = useAppSelector((state) => state.chainReducer)
    const provider = useProvider()
    const { connectMutation } = useMetaMaskSwr()
    
    return (
        <Card
            onPress={async () => {
                await provider?.connectFn()
            }}
            shadow="none"
            isPressable
            className="bg-default/40"
        >
            <CardBody className="px-3 py-2.5">
                <div className="place-items-center grid gap-2">
                    <Image
                        removeWrapper
                        className="w-10 h-10"
                        src={providerInfo.imageUrl}
                    />
                    <div className="flex gap-2 items-center">
                        {connectMutation.isMutating ? (
                            <Spinner color="default" size="sm" />
                        ) : null}
                        <div className="text-sm">{providerInfo.name}</div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
