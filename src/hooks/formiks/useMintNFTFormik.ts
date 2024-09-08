import * as Yup from "yup"
import { useFormiks } from "."
import { FormikProps, useFormik } from "formik"
import { useSDK } from "@metamask/sdk-react"
import { useAppSelector } from "@/redux"
import { ethers } from "ethers"
import { Signers, mintNFT, uploadJson } from "@/services"
import { PremiumTileMetadata } from "@/types"

export interface MintNFTFormikValues {
    tokenId: number,
    toAddress: string
}

export const _useMintNFTFormik =
  (): FormikProps<MintNFTFormikValues> => {
      const initialValues: MintNFTFormikValues = {
          tokenId: 0,
          toAddress: ""
      }
      const { chainKey, network, providerKey, nftKey, chains } = useAppSelector(
          (state) => state.chainReducer
      )
      const nftAddress = chains[chainKey].nftContracts[nftKey][network].address

      const validationSchema = Yup.object({
          toAddress: Yup.string()
              .required("Address is required"),
      })
      const { provider } = useSDK()
      
      const formik = useFormik({
          initialValues,
          validationSchema,
          onSubmit: async ({
              tokenId,
              toAddress
          }) => {
              const signers: Signers = {}
              if (providerKey === "metaMask") {
                  if (provider == null) return
                  signers.evmProvider = new ethers.BrowserProvider(provider)
              }
              const metadata: PremiumTileMetadata = {
                  growthTimeReduction: 0,
                  pestResistance: 0,
                  productivityIncrease: 0,
                  weedResistance: 0
              }
              const cid = await uploadJson({ jsonString: JSON.stringify(metadata)})
              await mintNFT({
                  nftAddress: nftAddress,
                  chainKey,
                  data: {
                      tokenId,
                      toAddress,
                      cid,
                  },
                  signers,
                  network,
              })
          },
      })

      return formik
  }

export const useMintNFTFormik = () => {
    const { mintNFTFormik } = useFormiks()
    return mintNFTFormik
}
