"use client"

import React from "react"
import { Card, CardBody } from "@nextui-org/react"
import { NftContractInfo } from "@/config"
import { PlusIcon } from "@heroicons/react/24/outline"

interface ImportNFTCardProps {
    contract: NftContractInfo
}

export const ImportNFTCard = ({ contract }: ImportNFTCardProps) => {
    return (
        <Card isPressable>
            <CardBody className="p-3">
                <PlusIcon className="w-10 h-10 text-foreground-400"/>
            </CardBody>
        </Card>
    )
}