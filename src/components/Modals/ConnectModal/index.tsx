"use client"

import React from "react"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Spacer,
    Link,
} from "@nextui-org/react"
import { useConnectModalDisclosure, useProvider } from "@/hooks"
import { useAppSelector } from "@/redux"
import { Chain } from "./Chain"
import { Provider } from "./Provider"
import { truncateString } from "@/utils"
import { Network } from "./Network"

export const ConnectModal = () => {
    const { isOpen, onClose } = useConnectModalDisclosure()
    const { chainKey, chains } = useAppSelector(
        (state) => state.chainReducer
    )
    const _chains = Object.values(chains)
    const provider = useProvider()
    return (
        <Modal isOpen={isOpen} hideCloseButton size="4xl">
            <ModalContent>
                <ModalHeader className="p-4 pb-2 font-bold">Connect</ModalHeader>
                <ModalBody className="p-4">
                    <div>
                        <div>
                            <div>Select Chain</div>
                            <Spacer y={3} />
                            <div className="grid gap-2 md:grid-cols-4">
                                {_chains.map((chainInfo) => (
                                    <Chain key={chainInfo.key} chainInfo={chainInfo} />
                                ))}
                            </div>
                        </div>
                        <Spacer y={4} />
                        <div>
                            <div>Select Network</div>
                            <Spacer y={3}/>
                            <Network />
                        </div>
                        <Spacer y={4} />
                        <div>
                            <div>Select Provider</div>
                            <Spacer y={3} />
                            <div className="grid gap-2 md:grid-cols-4">
                                {chains[chainKey].providers.map((providerInfo) => (
                                    <Provider
                                        key={providerInfo.key}
                                        providerInfo={providerInfo}
                                    />
                                ))}
                            </div>
                        </div>
                        <Spacer y={4} />
                        <div>
                            <div>Connected Address</div>
                            <Spacer y={3} />
                            {provider?.address ? (
                                <div>
                                    <div className="flex gap-2">
                                        <Link
                                            size="sm"
                                            as="button"
                                            color="foreground"
                                            isExternal
                                        >
                                            {truncateString(provider.address)}
                                        </Link>
                                        <Link
                                            size="sm"
                                            as="button"
                                            color="primary"
                                            onPress={async () => {
                                                await provider.disconnectFn()
                                            }}
                                        >
                    Disconnect
                                        </Link>
                                    </div>
                                </div>
                            ) : <div className="text-sm text-foreground-400">Connect to a provider to view the address</div>}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="p-4 pt-2">
                    <Button color="primary" variant="bordered" onPress={onClose}>
            Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
