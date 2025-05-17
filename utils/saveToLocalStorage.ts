import { currentBlockchain, store } from "@/store/store";
import { KeyPair } from "@/types/keypair";

export default function useSaveToLocalStorage(keypair: KeyPair) {
  const blockchain = store.get(currentBlockchain);

  if (!blockchain) {
    throw new Error('Blockchain is not set');
    return;
  }

  try {
    const existingKeyPairs = localStorage.getItem(blockchain.toString());
    let keyPairs: KeyPair[] = [];

    if (existingKeyPairs) {
      try {
        keyPairs = JSON.parse(existingKeyPairs);
      } catch (parseError) {
        console.error('Failed to parse existing keypairs:', parseError);
      }
    }

    keyPairs.push(keypair);
    localStorage.setItem(blockchain, JSON.stringify(keyPairs));
  } catch (error) {
    console.error('Failed to save keypair to local storage:', error);
  }
}
