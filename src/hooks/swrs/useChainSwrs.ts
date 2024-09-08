import { useAppSelector } from "@/redux"
import { useSwrs } from "."
import useSWR, { SWRResponse } from "swr"
import {
    NftService,
    Role,
    TransactionContext,
} from "@/services"
import { useAddress } from "./_useAddress"
import useSWRMutation, { SWRMutationResponse } from "swr/mutation"

const CHAIN_CHECK_MINTER = "CHAIN_CHECK_MINTER"
const CHAIN_CHECK_NFT_OWNERSHIP = "chainCheckNftOwnership"

export interface UseChainSwrsReturn {
  checkMinterSwr: SWRResponse<
    boolean,
    unknown,
    typeof CHAIN_CHECK_MINTER
  >;
  checkNFTOwnershipSwrMutation: SWRMutationResponse<
    boolean,
    unknown,
    typeof CHAIN_CHECK_NFT_OWNERSHIP,
    CheckNFTOwnershipParams
  >;
}

export interface CheckNFTOwnershipParams {
    tokenId: number
    context: TransactionContext
}

export const _useChainSwrs = (): UseChainSwrsReturn => {
    const { chainKey, network, chains, nftKey } = useAppSelector(
        (state) => state.chainReducer
    )
    const { chain } = chains[chainKey]

    const { address } = { ...useAddress() }
    const nftContractAddress = chains[chainKey].nftContracts[nftKey].addresses[network]

    const checkMinterSwr = useSWR(
        [CHAIN_CHECK_MINTER, chainKey, address],
        async () => {
            if (!address) return false
            try {
                const nftService = new NftService(chain, network, nftContractAddress)
                return await nftService.hasRole({ role : Role.Minter, accountAddress: address })
            } catch (ex: unknown) {
                console.log(ex)
                return false
            }
        }
    )

    const checkNFTOwnershipSwrMutation = useSWRMutation(
        CHAIN_CHECK_NFT_OWNERSHIP,
        async (
            _,
            {
                arg,
            }: {
        arg: CheckNFTOwnershipParams;
      }
        ) => {
            if (!address) return false
            try {
                const nftService = new NftService(chain, network, nftContractAddress, arg.context)
                const ownerAddress = await nftService.ownerOf({tokenId: arg.tokenId})
                return ownerAddress === address
            } catch (ex: unknown) {
                console.log(ex)
                return false
            }
        }
    )

    return {
        checkMinterSwr,
        checkNFTOwnershipSwrMutation,
    }
}

export const useChainSwrs = (): UseChainSwrsReturn => {
    const { chainSwrs } = useSwrs()
    return chainSwrs
}
