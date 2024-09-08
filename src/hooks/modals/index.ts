import { UseDisclosureReturn } from "@nextui-org/use-disclosure"
import { use } from "react"
import { HooksContext } from "../provider.hooks"
import { _useConnectModalDisclosure } from "./useConnectModalDiscloresure"
import { _useImportNFTModalDiscloresure } from "./useImportNFTModalDiscloresure"

export interface UseModalReturn {
    connectModalDisclosure: UseDisclosureReturn
    importNFTModalDiscloresure: UseDisclosureReturn
}

export const _useModals = () : UseModalReturn => {
    const connectModalDisclosure = _useConnectModalDisclosure()
    const importNFTModalDiscloresure = _useImportNFTModalDiscloresure()

    return {
        connectModalDisclosure,
        importNFTModalDiscloresure
    }
}


export const useModals = () : UseModalReturn => {
    const { modals } = use(HooksContext)!

    return modals
}

export * from "./useConnectModalDiscloresure"
export * from "./useImportNFTModalDiscloresure"