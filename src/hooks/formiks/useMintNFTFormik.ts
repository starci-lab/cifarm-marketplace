import * as Yup from "yup"
import { useFormiks } from "."
import { FormikProps, useFormik } from "formik"
import { useSDK } from "@metamask/sdk-react"
import { PremiumTileMetadata, useAppSelector } from "@/redux"
import { NftService, TransactionContext, uploadJson } from "@/services"
import { chainToPlatform } from "@wormhole-foundation/sdk"
import { BrowserProvider } from "ethers"

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
      const { chainKey, network, nftKey, chains } = useAppSelector(
          (state) => state.chainReducer
      )
      const { chain } = chains[chainKey]
      const nftContractAddress = chains[chainKey].nftContracts[nftKey].addresses[network]

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
            
              const metadata: PremiumTileMetadata = {
                  growthTimeReduction: 0,
                  pestResistance: 0,
                  productivityIncrease: 0,
                  weedResistance: 0
              }
              const cid = await uploadJson({ jsonString: JSON.stringify(metadata)})

              let context: TransactionContext | undefined
              switch(chainToPlatform(chain)) {
              case "Evm" : {
                  if (!provider) return
                  context = {
                      provider: new BrowserProvider(provider)
                  }
              }
              }
              if (!context) return
              const nftService = new NftService(chain, network, nftContractAddress, context)
              await nftService.mint({
                  cid,
                  toAddress,
                  tokenId
              })
          },
      })

      return formik
  }

export const useMintNFTFormik = () => {
    const { mintNFTFormik } = useFormiks()
    return mintNFTFormik
}
