import { FormikProps } from "formik"
import { use } from "react"
import { HooksContext } from "../provider.hooks"
import { CreatePremiumTileFormikValues, _useCreatePremiumTileFormik } from "./useCreatePremiumTileFormik"

export interface UseFormiksReturn {
    createPremiumTileFormik: FormikProps<CreatePremiumTileFormikValues>
}

export const _useFormiks = (): UseFormiksReturn => {
    const createPremiumTileFormik = _useCreatePremiumTileFormik()

    return {
        createPremiumTileFormik
    }
}

export const useFormiks = (): UseFormiksReturn => {
    const { formiks } = use(HooksContext)!

    return formiks
}

export * from "./useCreatePremiumTileFormik"