"use client"

import React from "react"
import { useConnectModalDisclosure } from "@/hooks"
import { Button } from "@nextui-org/react"

export const ConnectButton = () => {
    const { onOpen } = useConnectModalDisclosure()

    return (
        <Button onPress={onOpen}>Connect</Button>
    )
}