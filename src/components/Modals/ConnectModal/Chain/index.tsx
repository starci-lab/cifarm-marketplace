"use client"

import { ChainInfo } from "@/config"
import { setChainKey, useAppDispatch, useAppSelector } from "@/redux"
import { Button, Image } from "@nextui-org/react"
import React from "react"

export interface ChainProps {
  chainInfo: ChainInfo;
}

export const Chain = ({ chainInfo }: ChainProps) => {
    const dispatch = useAppDispatch()
    const chainKey = useAppSelector((state) => state.chainReducer.chainKey)
    return (
        <Button
            onPress={() => dispatch(setChainKey(chainInfo.key))}
            className="justify-start"
            fullWidth
            variant={chainKey == chainInfo.key ? "flat" : "light"}
            startContent={
                <Image removeWrapper className="w-5 h-5" src={chainInfo.imageUrl} />
            }
        >
            {chainInfo.name}
        </Button>
    )
}
