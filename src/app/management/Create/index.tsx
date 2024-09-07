"use client"
import { useAppSelector } from "@/redux"
import {
    Button,
    Card,
    CardBody,
    Input,
    ScrollShadow,
    Spacer,
} from "@nextui-org/react"
import React from "react"
import { NftTypeCard } from "./NftTypeCard"
import { useChainSwrs, useMintNFTFormik } from "@/hooks"

export const Create = () => {
    const { chainKey, chains, network } = useAppSelector(
        (state) => state.chainReducer
    )
    const contracts = Object.values(chains[chainKey].nftContracts).map(
        (nftContract) => nftContract[network]
    )

    const formik = useMintNFTFormik()

    const { checkMinterSwr } = useChainSwrs()
    return (
        <div>
            <div className="text-2xl font-bold">Create</div>
            <Spacer y={6} />
            <Card shadow="none" className="bg-warning/20">
                <CardBody className="px-3 py-2.5 text-sm">
          In order to create a CiFarm NFT, it is necessary for you to be granted
          the MINTER role. Without this specific role, you will not have the
          required permissions to initiate the creation process.
                </CardBody>
            </Card>
            <Spacer y={6} />
            <div>
                <ScrollShadow orientation="horizontal" className="w-full h-[282px]">
                    <div className="flex gap-2 items-center p-4">
                        {contracts.map((nftContractInfo) => (
                            <NftTypeCard
                                key={nftContractInfo.key}
                                nftContractInfo={nftContractInfo}
                            />
                        ))}
                    </div>
                </ScrollShadow>
                <Spacer y={6} />
                {checkMinterSwr.data ? (
                    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                        <Input
                            id="toAddress"
                            label="To Address"
                            isRequired
                            placeholder="Input to address here"
                            labelPlacement="outside"
                            value={formik.values.toAddress}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={!!(formik.touched.toAddress && formik.errors.toAddress)}
                            errorMessage={formik.touched.toAddress && formik.errors.toAddress}
                        />
                        <Spacer y={4} />
                        <Button
                            onPress={formik.submitForm}
                            isLoading={formik.isSubmitting}
                            color="primary"
                        >
              Create
                        </Button>
                    </form>
                ) : (
                    <div>
            You have not been granted the MINTER role. Please contact the admin
            to resolve this issue.
                    </div>
                )}
            </div>
        </div>
    )
}
