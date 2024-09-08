import { useDisclosure } from "@nextui-org/react"
import { UseDisclosureReturn } from "@nextui-org/use-disclosure"
import { useModals } from "."

export const _useImportNFTModalDiscloresure = () : UseDisclosureReturn => {
    return useDisclosure()
}

export const useImportNFTModalDiscloresure = () : UseDisclosureReturn => {
    const { importNFTModalDiscloresure } = useModals()
    return importNFTModalDiscloresure
}



