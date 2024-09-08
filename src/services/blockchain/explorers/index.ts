import { Chain } from "@wormhole-foundation/sdk"
import { avalancheExplorer } from "./avalanche.explorer"
import { Network } from "@/config"

export * from "./avalanche.explorer"

export const explorer = (value: string, chain: Chain, network: Network) => {
    switch (chain) {
    case "Avalanche":
        return avalancheExplorer(value, network)
    default: throw new Error(`Chain not found: ${chain}`)
    }
}
