import { useAppSelector } from "@/redux"
import { useSDK } from "@metamask/sdk-react"

export interface UseAdressReturn {
  address: string;
}
export const useAddress = (): UseAdressReturn | undefined => {
    const providerKey = useAppSelector((state) => state.chainReducer.providerKey)
    const { account } = useSDK()
    switch (providerKey) {
    case "metaMask": {
        return {
            address: account ?? "",
        }
    }
    }
}
