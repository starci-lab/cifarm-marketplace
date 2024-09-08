"use client"

import React from "react"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Image,
    Input,
    Spacer,
} from "@nextui-org/react"
import { useImportNFTFormik, useImportNFTModalDiscloresure } from "@/hooks"
import { useAppSelector } from "@/redux"

export const ImportNFTModal = () => {
    const { isOpen, onClose } = useImportNFTModalDiscloresure()
    const { chainKey, chains, nftKey } = useAppSelector(
        (state) => state.chainReducer
    )
    const { imageUrl, name } = chains[chainKey].nftContracts[nftKey]

    const formik = useImportNFTFormik()
    return (
        <Modal isOpen={isOpen} hideCloseButton size="sm">
            <ModalContent>
                <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                    <ModalHeader className="p-4 pb-2 font-bold">Import NFT</ModalHeader>
                    <ModalBody className="p-4">
                        <div>
                            <Image
                                removeWrapper
                                className="w-full max-w-[200px]"
                                src={imageUrl}
                            />
                            <Spacer y={2}/>
                            <div className="font-bold">{name}</div>
                            <Spacer y={4}/>
                            <Input
                                id="tokenId"
                                label="Token Id"
                                isRequired
                                placeholder="Input token Id here"
                                labelPlacement="outside"
                                value={formik.values.tokenId.toString()}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!(formik.touched.tokenId && formik.errors.tokenId)}
                                errorMessage={formik.touched.tokenId && formik.errors.tokenId}
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter className="p-4 pt-2">
                        <Button color="primary" variant="bordered" onPress={onClose}>
              Close
                        </Button>
                        <Button
                            color="primary"
                            onPress={async () => {
                                await formik.submitForm()
                                onClose()
                            }}
                        >
              Import
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}
