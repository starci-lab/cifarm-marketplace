import { use } from "react"
import { HooksContext } from "../provider.hooks"
import { UseMetaMaskReturn, _useMetaMaskSwr } from "./useMetaMaskSwr"

export interface UseSwrsReturn {
    metaMaskSwr: UseMetaMaskReturn
}

export const _useSwrs = () : UseSwrsReturn => {
    const metaMaskSwr = _useMetaMaskSwr()
    return {
        metaMaskSwr
    }   
}

export const useSwrs = () : UseSwrsReturn => {
    const { swrs } = use(HooksContext)!
    return swrs
}

export * from "./useMetaMaskSwr"