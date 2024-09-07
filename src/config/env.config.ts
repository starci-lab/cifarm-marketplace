export const envConfig = () => ({
    urls: {
        backend: {
            api: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
            graphql: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`
        }
    },
    pinata: {
        jwt: process.env.PINATA_JWT,
        gateway: process.env.PINATA_GATEWAY,
    }
})