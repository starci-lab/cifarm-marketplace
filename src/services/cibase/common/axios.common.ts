import { envConfig } from "@/config"
import axios from "axios"

export const authAxios = axios.create()

export const AUTH_KEY = "auth-key"

authAxios.interceptors.request.use(
    (config) => {
        config.headers[AUTH_KEY] = envConfig().cibase.authKey
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
