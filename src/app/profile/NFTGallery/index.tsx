"use client"
import { useAppSelector } from "@/redux"
import { Image, Tab, Tabs } from "@nextui-org/react"
import React from "react"
import { ImportNFTCard } from "./ImportNFTCard"

export const NFTGallery = () => {
    const { chainKey, chains, network } = useAppSelector(
        (state) => state.chainReducer
    )
    const contracts = Object.values(chains[chainKey].nftContracts).map(
        (nftContract) => ({
            ...nftContract,
            address: nftContract.addresses[network],
        })
    )

    return (
        <div>
            <Tabs
                classNames={{
                    tab: "w-full",
                }}
            >
                {contracts.map((contract) => (
                    <Tab
                        key={contract.key}
                        title={
                            <div className="flex gap-2 items-center">
                                <Image src={contract.imageUrl} className="w-5" />
                                <div className="text-sm">{contract.name}</div>
                            </div>
                        }
                    >
                        <ImportNFTCard contract={contract} />
                    </Tab>
                ))}
            </Tabs>
        </div>
    )
}
