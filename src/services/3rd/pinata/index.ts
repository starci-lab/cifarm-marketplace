import { PinataSDK } from "pinata"
import { envConfig } from "@/config"

export const pinata = new PinataSDK({
    pinataJwt: envConfig().pinata.jwt,
    pinataGateway:  envConfig().pinata.gateway,
})

export const uploadJsonToPinata = async (json: object) => {
    const { cid } = await pinata.upload.json(json)
    return cid
}