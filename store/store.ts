import { Blockchain } from "@/types/blockchain";
import { atom, createStore } from "jotai";

export const currentBlockchain = atom<Blockchain | null>(null);
export const store = createStore();
