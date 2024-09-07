import { useAppSelector } from "@/redux"
import { useSwrs } from "."
import useSWR, { SWRResponse } from "swr"
import {
    checkMinter as _checkMinter,
} from "@/services"
import { useAddress } from "./useAddress"

const CHAIN_CHECK_MINTER = "chainCheckMinter"
export interface UseChainSwrsReturn {
  checkMinterSwr: SWRResponse<
    boolean | undefined,
    unknown,
    typeof CHAIN_CHECK_MINTER
  >;
}

export const _useChainSwrs = (): UseChainSwrsReturn => {
    const { chainKey, network, chains, nftKey } = useAppSelector(
        (state) => state.chainReducer
    )
    const { address } = { ...useAddress() }
    const nftAddress = chains[chainKey].nftContracts[nftKey][network].address
    
    const checkMinterSwr = useSWR(
        [CHAIN_CHECK_MINTER, chainKey, address],
        async () => {
            if (!address) return
            try {
                return await _checkMinter({
                    accountAddress: address,
                    nftAddress: nftAddress,
                    chainKey,
                    network,
                })
            } catch (ex: unknown) {
                console.log(ex)
            }
        }
    )

    return {
        checkMinterSwr
    }
}

export const useChainSwrs = (): UseChainSwrsReturn => {
    const { chainSwrs } = useSwrs()
    return chainSwrs
}
