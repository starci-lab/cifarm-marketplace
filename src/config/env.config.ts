export const envConfig = () => ({
    urls: {
        backend: {
            api: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
            graphql: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`
        }
    },
    cibase : {
        apiUrl: process.env.CIBASE_API_URL ?? "https://blockchain-auth-service.starci.net/api/v1",
        authKey: process.env.CIBASE_AUTH_KEY
    }
})