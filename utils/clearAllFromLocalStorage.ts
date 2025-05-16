import { Blockchain } from "@/types/blockchain";

export default function clearaLLFromLocalStorage(blockchain: Blockchain) {
  try {
    localStorage.removeItem(blockchain.toString());
  } catch (error) {
    console.error("Failed to clear keypairs from local storage:", error);
  }
}
