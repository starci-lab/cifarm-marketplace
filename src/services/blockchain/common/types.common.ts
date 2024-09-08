import { BrowserProvider } from "ethers"

export interface EvmTransactionContext {
  provider: BrowserProvider;
}

export type TransactionContext = EvmTransactionContext;
