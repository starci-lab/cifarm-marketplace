"use client"

import { ProviderInfo } from "@/config"
import { useMetaMaskSwr } from "@/hooks"
import { useAppSelector } from "@/redux"
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
    const { providerKey } = useAppSelector((state) => state.chainReducer)
    const { connectMutation } = useMetaMaskSwr()

    return (
        <Card
            onPress={async () => {
                if (providerKey === "metaMask") {
                    await connectMutation.trigger()
                }
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
                        <div className="text-sm">{providerInfo.name}</div>
                        {connectMutation.isMutating ? (
                            <Spinner color="default" size="sm" />
                        ) : null}
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
