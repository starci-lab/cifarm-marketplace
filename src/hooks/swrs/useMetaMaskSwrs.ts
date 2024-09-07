import { useSwrs } from "."
import useSWRMutation, { SWRMutationResponse } from "swr/mutation"
import { useSDK } from "@metamask/sdk-react"

const METAMASK_CONNECT = "metamaskConenct"
const METAMASK_DISCONNECT = "metamaskDisconenct"

export interface UseMetaMaskSwrsReturn {
  connectSwrMutation: SWRMutationResponse<
    void,
    unknown,
    typeof METAMASK_CONNECT
  >;
  disconnectSwrMutation: SWRMutationResponse<
    void,
    unknown,
    typeof METAMASK_DISCONNECT
  >;
}

export const _useMetaMaskSwrs = (): UseMetaMaskSwrsReturn => {
    const { sdk } = useSDK()
    const connectSwrMutation = useSWRMutation(METAMASK_CONNECT, async () => {
        try {
            await sdk?.connect()
        } catch (ex: unknown) {
            console.log(ex)
        } 
    })
    const disconnectSwrMutation = useSWRMutation(METAMASK_DISCONNECT, async () => {
        try {
            await sdk?.terminate()
        } catch (ex: unknown) {
            console.log(ex)
        } 
    })
    return {
        connectSwrMutation,
        disconnectSwrMutation
    }
}

export const useMetaMaskSwrs = (): UseMetaMaskSwrsReturn => {
    const { metaMaskSwrs } = useSwrs()
    return metaMaskSwrs
}
