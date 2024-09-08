export const envConfig = () => ({
    cibase : {
        apiUrl: process.env.CIBASE_API_URL ?? "https://blockchain-auth-service.starci.net/api/v1",
        authKey: process.env.CIBASE_AUTH_KEY
    }
})