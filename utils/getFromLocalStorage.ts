import { currentBlockchain, store } from "@/store/store";
import { KeyPair } from "@/types/keypair";

export default function useGetFromLocalStorage() {
  const blockchain = store.get(currentBlockchain);

  if (!blockchain) {
    throw new Error('Blockchain is not set');
  }

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
