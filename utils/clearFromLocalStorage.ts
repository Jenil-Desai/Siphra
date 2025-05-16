import { Blockchain } from "@/types/blockchain";
import { KeyPair } from "@/types/keypair";

export default function clearFromLocalStorage(id: string, blockchain: Blockchain) {
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

    keyPairs = keyPairs.filter((keypair: KeyPair) => keypair.id !== id);
    localStorage.setItem("keypairs", JSON.stringify(keyPairs));
  } catch (error) {
    console.error('Failed to save keypair to local storage:', error);
  }
}
