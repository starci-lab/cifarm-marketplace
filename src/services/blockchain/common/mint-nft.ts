import ethers from "ethers"

export interface Signers {
  evmSigner?: ethers.JsonRpcSigner;
}
export interface MintNFTData {
  toAddress: string;
  cid: string;
}
