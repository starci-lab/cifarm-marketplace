import { UseDisclosureReturn } from "@nextui-org/use-disclosure"
import { use } from "react"
import { HooksContext } from "../provider.hooks"
import { _useConnectModalDisclosure } from "./useConnectModalDiscloresure"

export interface UseModalReturn {
    connectModalDisclosure: UseDisclosureReturn
}

export const _useModals = () : UseModalReturn => {
    const connectModalDisclosure = _useConnectModalDisclosure()

    return {
        connectModalDisclosure
    }
}


export const useModals = () : UseModalReturn => {
    const { modals } = use(HooksContext)!

    return modals
}

export * from "./useConnectModalDiscloresure"