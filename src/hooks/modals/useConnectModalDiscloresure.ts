import { useDisclosure } from "@nextui-org/react"
import { UseDisclosureReturn } from "@nextui-org/use-disclosure"
import { useModals } from "."

export const _useConnectModalDisclosure = () : UseDisclosureReturn => {
    return useDisclosure()
}

export const useConnectModalDisclosure = () : UseDisclosureReturn => {
    const { connectModalDisclosure } = useModals()
    return connectModalDisclosure
}



