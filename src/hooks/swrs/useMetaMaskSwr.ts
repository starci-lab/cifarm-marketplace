import { useSwrs } from "."
import useSWRMutation, { SWRMutationResponse } from "swr/mutation"
import { useSDK } from "@metamask/sdk-react"

const METAMASK_CONNECT = "metamaskConenct"

export interface UseMetaMaskReturn {
  connectMutation: SWRMutationResponse<
    void,
    unknown,
    typeof METAMASK_CONNECT
  >;
}

export const _useMetaMaskSwr = (): UseMetaMaskReturn => {
    const { sdk } = useSDK()
    const connectMutation = useSWRMutation(METAMASK_CONNECT, async () => {
        await sdk?.connect()
    })
    return {
        connectMutation,
    }
}

export const useMetaMaskSwr = (): UseMetaMaskReturn => {
    const { metaMaskSwr } = useSwrs()
    return metaMaskSwr
}
