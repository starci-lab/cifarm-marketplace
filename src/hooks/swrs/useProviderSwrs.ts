import { useSwrs } from "."
import useSWRMutation, { SWRMutationResponse } from "swr/mutation"
import { useSDK } from "@metamask/sdk-react"

const PROVIDER_CONNECT = "providerConenct"
const PROVIDER_DISCONNECT = "providerDisconenct"

export interface UseProviderSwrsReturn {
  connectSwrMutation: SWRMutationResponse<
    void,
    unknown,
    typeof PROVIDER_CONNECT
  >;
  disconnectSwrMutation: SWRMutationResponse<
    void,
    unknown,
    typeof PROVIDER_DISCONNECT
  >;
}

export const _useProviderSwrs = (): UseProviderSwrsReturn => {
    const { sdk } = useSDK()
    const connectSwrMutation = useSWRMutation(PROVIDER_CONNECT, async () => {
        try {
            await sdk?.connect()
        } catch (ex: unknown) {
            console.log(ex)
        } 
    })
    const disconnectSwrMutation = useSWRMutation(PROVIDER_DISCONNECT, async () => {
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

export const useProviderSwrs = (): UseProviderSwrsReturn => {
    const { providerSwrs } = useSwrs()
    return providerSwrs
}
