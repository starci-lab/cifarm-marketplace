import { Network } from "@/config"
import { EvmChains } from "@wormhole-foundation/sdk-evm"
import { avalancheRpc } from "./avalanche.evm"

export const evmRpc = (chain: EvmChains, network: Network) => {
    switch (chain) {
    case "Avalanche": {
        return avalancheRpc(network)
    }
    default: throw new Error(`Chain not supported: ${chain}`)
    }
}