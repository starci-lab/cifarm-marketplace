import { use } from "react"
import { HooksContext } from "../provider.hooks"
import { UseProviderSwrsReturn, _useProviderSwrs } from "./useProviderSwrs"
import { UseChainSwrsReturn, _useChainSwrs } from "./useChainSwrs"

export interface UseSwrsReturn {
    providerSwrs: UseProviderSwrsReturn
    chainSwrs: UseChainSwrsReturn
}

export const _useSwrs = () : UseSwrsReturn => {
    const providerSwrs = _useProviderSwrs()
    const chainSwrs = _useChainSwrs()
    return {
        providerSwrs,
        chainSwrs
    }   
}

export const useSwrs = () : UseSwrsReturn => {
    const { swrs } = use(HooksContext)!
    return swrs
}

export * from "./useProviderSwrs"
export * from "./useChainSwrs"