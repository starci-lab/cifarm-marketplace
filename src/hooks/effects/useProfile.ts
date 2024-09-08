import {
    Profile,
    profileKey,
    setProfile,
    useAppDispatch,
    useAppSelector,
} from "@/redux"
import { useAddress } from "../common"
import { useEffect } from "react"
import { readStorage, writeStorage } from "@/services"

export const useProfile = () => {
    const { chainKey } = useAppSelector((state) => state.chainReducer)
    const { profile, saveProfileKey } = useAppSelector(
        (state) => state.appReducer
    )
    const { address } = { ...useAddress() }
    const dispatch = useAppDispatch()

    //first load load from profile
    useEffect(() => {
        if (!address) return
        const handleEffect = async () => {
            const key = profileKey(chainKey, address)
            try {
                const data = await readStorage({ key })
                if (data !== "") {
                    dispatch(setProfile(data as Profile))
                }
            } catch (ex) {
                console.log(ex)
            }    
        }
        handleEffect()
    }, [address])

    useEffect(() => {
        if (!saveProfileKey) return
        if (!address) return
        const handleEffect = async () => {
            const key = profileKey(chainKey, address)
            await writeStorage({ key, data: JSON.stringify(profile) })
        }
        handleEffect()
    }, [saveProfileKey])
}
