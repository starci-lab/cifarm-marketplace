import { use } from "react"
import { HooksContext } from "../provider.hooks"
import { UseMetaMaskSwrsReturn, _useMetaMaskSwrs } from "./useMetaMaskSwrs"
import { UseChainSwrsReturn, _useChainSwrs } from "./useChainSwrs"

export interface UseSwrsReturn {
    metaMaskSwrs: UseMetaMaskSwrsReturn
    chainSwrs: UseChainSwrsReturn
}

export const _useSwrs = () : UseSwrsReturn => {
    const metaMaskSwrs = _useMetaMaskSwrs()
    const chainSwrs = _useChainSwrs()
    return {
        metaMaskSwrs,
        chainSwrs
    }   
}

export const useSwrs = () : UseSwrsReturn => {
    const { swrs } = use(HooksContext)!
    return swrs
}

export * from "./useMetaMaskSwrs"
export * from "./useChainSwrs"