import { readStorage, writeStorage } from "./core.storage"

export * from "./core.storage"

export interface Listing {
    sellerAddress: string,
    price: number
}
export type NFTListing = Record<number, Listing>

const key = "listings"

export class NFTListingService {
    public async add(tokenId: number, listing: Listing) {
        let listings: NFTListing = {}
        const data = await readStorage({
            key,
        }) as string
        if (data !== "") {
            listings = JSON.parse(data) as NFTListing
        } 
        listings[tokenId] = listing
        await writeStorage({
            key,
            data: JSON.stringify(listing),
        })
    }
}

export const nftListingService = new NFTListingService()