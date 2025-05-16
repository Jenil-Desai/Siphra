import { Blockchain } from "@/types/blockchain";
import { KeyPair } from "@/types/keypair";

export default function getFromLocalStorage(blockchain: Blockchain) {
  try {
    const existingKeyPairs = localStorage.getItem(blockchain.toString());
    let keyPairs: KeyPair[] = [];

    if (existingKeyPairs) {
      try {
        keyPairs = JSON.parse(existingKeyPairs);
      } catch (parseError) {
        console.error('Failed to parse existing keypairs:', parseError);
        throw new Error('Failed to parse existing keypairs');
      }
    }

    return keyPairs;
  } catch (error) {
    console.error('Failed to retrieve keypairs from local storage:', error);
    throw new Error('Failed to retrieve keypairs from local storage');
  }
}
