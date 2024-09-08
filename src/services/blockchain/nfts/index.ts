import { Network } from "@/config"
import { Chain } from "@wormhole-foundation/sdk"
import { TransactionContext } from "../common"
import { MintParams, mint } from "./mint.nft"
import { HasRoleParams, hasRole } from "./has-role.nft"
import { OwnerOfParams, ownerOf } from "./owner-of.nft"
import { TokenURIParams, tokenURI } from "./token-uri.nft"

export class NftService {
    constructor(
    private readonly chain: Chain,
    private readonly network: Network,
    private readonly contractAddress: string,
    private readonly context?: TransactionContext
    ) {}

    public async mint({
        cid,
        toAddress,
        tokenId,
    }: Pick<MintParams, "cid" | "toAddress" | "tokenId">) {
        if (!this.context) return
        return await mint({
            chain: this.chain,
            cid,
            context: this.context,
            contractAddress: this.contractAddress,
            toAddress,
            tokenId,
        })
    }

    public async hasRole({
        accountAddress,
        role
    }: Pick<HasRoleParams, "accountAddress" | "role">) {
        return await hasRole({
            accountAddress,
            role,
            chain: this.chain,
            contractAddress: this.contractAddress,
            network: this.network,
        })
    }

    public async ownerOf({
        tokenId
    }: Pick<OwnerOfParams, "tokenId">)
    {
        return await ownerOf({
            tokenId,
            chain: this.chain,
            contractAddress: this.contractAddress,
            network: this.network,
        }) 
    }

    public async tokenURI({
        tokenId
    }: Pick<TokenURIParams, "tokenId">)
    {
        return await tokenURI({
            tokenId,
            chain: this.chain,
            contractAddress: this.contractAddress,
            network: this.network,
        }) 
    }
}

export * from "./has-role.nft"
export * from "./owner-of.nft"