import * as Yup from "yup"
import { useFormiks } from "."
import { FormikProps, useFormik } from "formik"

export interface CreatePremiumTileFormikValues {
  productivityIncrease: number;
  growthTimeReduction: number;
  pestResistance: number;
  weedResistance: number;
}

export const _useCreatePremiumTileFormik =
  (): FormikProps<CreatePremiumTileFormikValues> => {
      const initialValues: CreatePremiumTileFormikValues = {
          productivityIncrease: 0,
          growthTimeReduction: 0,
          pestResistance: 0,
          weedResistance: 0,
      }

      const validationSchema = Yup.object({
          productivityIncrease: Yup.number()
              .min(0, "Productivity increase must be a non-negative number")
              .required("Productivity increase is required"),

          growthTimeReduction: Yup.number()
              .min(0, "Development time reduction must be a non-negative number")
              .required("Development time reduction is required"),

          pestResistance: Yup.number()
              .min(0, "Pest resistance must be a non-negative number")
              .max(100, "Pest resistance must be at most 100")
              .required("Pest resistance is required"),

          weedResistance: Yup.number()
              .min(0, "Weed resistance must be a non-negative number")
              .max(100, "Weed resistance must be at most 100")
              .required("Weed resistance is required"),
      })

      const formik = useFormik({
          initialValues,
          validationSchema,
          onSubmit: async ({
              growthTimeReduction,
              pestResistance,
              productivityIncrease,
              weedResistance,
          }) => {
              console.log(
                  growthTimeReduction,
                  pestResistance,
                  productivityIncrease,
                  weedResistance
              )
          },
      })

      return formik
  }

export const useCreatePremiumTileFormik = () => {
    const { createPremiumTileFormik } = useFormiks()
    return createPremiumTileFormik
}
