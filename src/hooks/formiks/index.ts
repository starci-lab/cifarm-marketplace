import { FormikProps } from "formik"
import { use } from "react"
import { HooksContext } from "../provider.hooks"
import { MintNFTFormikValues, _useMintNFTFormik } from "./useMintNFTFormik"
import { ImportNFTFormikValues, _useImportNFTFormik } from "./useImportNFTFormik"

export interface UseFormiksReturn {
    mintNFTFormik: FormikProps<MintNFTFormikValues>
    importNFTFormik: FormikProps<ImportNFTFormikValues>
}

export const _useFormiks = (): UseFormiksReturn => {
    const mintNFTFormik = _useMintNFTFormik()
    const importNFTFormik = _useImportNFTFormik()

    return {
        mintNFTFormik,
        importNFTFormik
    }
}

export const useFormiks = (): UseFormiksReturn => {
    const { formiks } = use(HooksContext)!

    return formiks
}

export * from "./useMintNFTFormik"
export * from "./useImportNFTFormik"