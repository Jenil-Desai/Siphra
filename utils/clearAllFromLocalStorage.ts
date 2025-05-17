import { currentBlockchain, store } from "@/store/store";

export default function useClearaLLFromLocalStorage() {
  const blockchain = store.get(currentBlockchain);

  if (!blockchain) {
    throw new Error('Blockchain is not set');
    return;
  }

  try {
    localStorage.removeItem(blockchain.toString());
  } catch (error) {
    console.error("Failed to clear keypairs from local storage:", error);
  }
}
