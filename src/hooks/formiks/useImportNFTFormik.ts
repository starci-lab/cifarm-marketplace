import * as Yup from "yup"
import { useFormiks } from "."
import { FormikProps, useFormik } from "formik"
import { importNFT, triggerSaveProfile, useAppDispatch, useAppSelector } from "@/redux"
import { NftService } from "@/services"
import { useAddress } from "../common"
import { toChecksumAddress } from "@/utils"
import { triggerSuccessToast, triggerErrorToast } from "@/toasts"
export interface ImportNFTFormikValues {
  tokenId: number;
}

export const _useImportNFTFormik = (): FormikProps<ImportNFTFormikValues> => {
    const initialValues: ImportNFTFormikValues = {
        tokenId: 0,
    }
    const { chainKey, network, nftKey, chains } = useAppSelector(
        (state) => state.chainReducer
    )
    const dispatch = useAppDispatch()
    const { chain } = chains[chainKey]
    const nftContractAddress =
    chains[chainKey].nftContracts[nftKey].addresses[network]

    const validationSchema = Yup.object({
        tokenId: Yup.number().required("Token id is required"),
    })

    const { address } = { ...useAddress() }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async ({ tokenId }) => {
            try {
                if (!address) return
                const nftService = new NftService(chain, network, nftContractAddress)
                const [ownerAddress, tokenURI] = await Promise.all([
                    nftService.ownerOf({
                        tokenId,
                    }),
                    nftService.tokenURI({
                        tokenId,
                    }),
                ])
                if (ownerAddress === toChecksumAddress(address)) {
                    triggerSuccessToast("Import successfully")
                    dispatch(
                        importNFT({
                            nftKey,
                            nft: {
                                listed: false,
                                nftKey,
                                tokenId,
                                tokenURI,
                            },
                        })
                    )
                    dispatch(triggerSaveProfile())
                } else {
                    triggerErrorToast("You do not own this NFT")
                }
            } catch (ex) {
                console.log(ex)
                triggerErrorToast("NFT not found")
            }
        },
    })

    return formik
}

export const useImportNFTFormik = () => {
    const { importNFTFormik } = useFormiks()
    return importNFTFormik
}
