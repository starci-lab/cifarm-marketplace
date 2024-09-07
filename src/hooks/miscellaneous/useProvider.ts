import { useAppSelector } from "@/redux"
import { useSDK } from "@metamask/sdk-react"
import { useProviderSwrs } from "../swrs"

export interface UseProviderReturn {
  address: string;
  connectFn: () => Promise<void>;
  disconnectFn: () => Promise<void>;
}
export const useProvider = (): UseProviderReturn | undefined => {
    const providerKey = useAppSelector((state) => state.chainReducer.providerKey)
    const { account } = useSDK()
    const { connectSwrMutation, disconnectSwrMutation } = useProviderSwrs()
    switch (providerKey) {
    case "metaMask": {
        return {
            address: account ?? "",
            connectFn: async () => {
                await connectSwrMutation.trigger()
            },
            disconnectFn: async () => {
                await disconnectSwrMutation.trigger()
            },
        }
    }
    }
}
