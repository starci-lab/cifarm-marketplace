import { FormikProps } from "formik"
import { use } from "react"
import { HooksContext } from "../provider.hooks"
import { MintNFTFormikValues, _useMintNFTFormik } from "./useMintNFTFormik"

export interface UseFormiksReturn {
    mintNFTFormik: FormikProps<MintNFTFormikValues>
}

export const _useFormiks = (): UseFormiksReturn => {
    const mintNFTFormik = _useMintNFTFormik()

    return {
        mintNFTFormik
    }
}

export const useFormiks = (): UseFormiksReturn => {
    const { formiks } = use(HooksContext)!

    return formiks
}

export * from "./useMintNFTFormik"