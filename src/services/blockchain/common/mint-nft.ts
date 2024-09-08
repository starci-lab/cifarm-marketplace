import ethers from "ethers"

export interface Signers {
  evmProvider?: ethers.BrowserProvider;
}
export interface MintNFTData {
  tokenId: number,
  toAddress: string;
  cid: string;
}