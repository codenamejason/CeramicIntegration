import WalletConnectProvider from "@walletconnect/web3-provider";
import { ThreeIdConnect, EthereumAuthProvider } from "@3id/connect";
import Authereum from "authereum";
import type { DIDProvider } from "dids";
import Fortmatic from "fortmatic";
import Web3Modal from "web3modal";
import LitJsSdk from "lit-js-sdk";

// @ts-ignore
export const threeID = new ThreeIdConnect();

export async function getProvider(): Promise<DIDProvider> {
  // const ethProvider = await web3Modal.connect()
  // const addresses = await ethProvider.enable()
  const { web3, account } = await LitJsSdk.connectWeb3();
  await threeID.connect(new EthereumAuthProvider(web3, account));
  return threeID.getDidProvider();
}

export async function getAddress(): Promise<String> {
  // const ethProvider = await web3Modal.connect()
  // const addresses = await ethProvider.enable()
  // const addr = addresses[0]
  const { web3, account } = await LitJsSdk.connectWeb3();
  return account;
}
