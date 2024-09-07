"use client"

import React from "react"
import { useConnectModalDisclosure, useProvider } from "@/hooks"
import { Button, Image } from "@nextui-org/react"
import { truncateString } from "@/utils"
import { useAppSelector } from "@/redux"

export const ConnectButton = () => {
    const { onOpen } = useConnectModalDisclosure()
    const provider = useProvider()
    const { chainKey, chains } = useAppSelector((state) => state.chainReducer)
    return (
        <Button
            color="default"
            variant="flat"
            startContent={
                <Image
                    removeWrapper
                    src={chains[chainKey].imageUrl}
                    className="w-5 h-5"
                />
            }
            onPress={onOpen}
        >
            {truncateString(provider?.address || "") || "Connect"}
        </Button>
    )
}
