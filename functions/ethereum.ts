import { v4 as uuidv4 } from 'uuid';
import { getLenghtFromLocalStorage } from '@/utils/getFromLocalStorage';
import { derivePath } from 'ed25519-hd-key';
import { getMnemonic } from './seed';
import { mnemonicToSeedSync } from 'bip39';
import { ethers } from 'ethers';

type EthereumKeyPair = {
  id: string;
  privateKey: string;
  publicKey: string;
}

export function generateEthereumKeyPair(): EthereumKeyPair {
  const mnemonic = getMnemonic();
  const seed = mnemonicToSeedSync(mnemonic);
  const totalKeyPairs = getLenghtFromLocalStorage();

  const { key: deriveSeed } = derivePath(`m/44'/60'/${totalKeyPairs + 1}'/0'`, seed.toString("hex"));
  const privateKey = Buffer.from(deriveSeed).toString("hex");

  const wallet = new ethers.Wallet(privateKey);
  const publicKey = wallet.address;

  const id = uuidv4();

  return {
    id,
    privateKey,
    publicKey,
  };
}
