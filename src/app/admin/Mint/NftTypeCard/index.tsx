"use client"
import { NftContractInfo } from "@/config"
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import React from "react"

interface NftTypeCardProps {
    nftContractInfo: NftContractInfo
}

export const NftTypeCard = ({ nftContractInfo }: NftTypeCardProps) => {
    return (
        <Card isPressable className="w-[200px] h-[250px]">
            <CardBody className="p-4">
                <div className="aspect-square place-items-center grid">
                    <Image className="w-full" removeWrapper src={nftContractInfo.imageUrl}/>
                </div>   
            </CardBody>
            <CardFooter className="p-4 pt-2">
                {nftContractInfo.name}
            </CardFooter>
        </Card>
    )
}