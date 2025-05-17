import { ethers } from 'ethers';
import { getMnemonic } from '@/functions/seed';
import { v4 as uuidv4 } from 'uuid';

type EthereumKeyPair = {
  id: string;
  privateKey: string;
  publicKey: string;
}

export function generateEthereumKeyPair(): EthereumKeyPair {
  const pharse = getMnemonic();
  const wallet = ethers.Wallet.fromPhrase(pharse);

  const privateKey = wallet.privateKey;
  const publicKey = wallet.address;
  const id = uuidv4();

  return {
    id,
    privateKey,
    publicKey,
  };
}
