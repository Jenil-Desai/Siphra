import { KeyPair } from "@/types/keypair";
import { atom } from "jotai";

export const SOLANA = atom<KeyPair[]>([])
export const ETHEREUM = atom<KeyPair[]>([])
