import { Keypair } from "@solana/web3.js"
import { getMnemonic } from "./seed";
import * as bip39 from "bip39";
import { derivePath } from "ed25519-hd-key"
import { v4 as uuidv4 } from "uuid";

type generateSolanaKeyPairReturnType = {
  publicKey: string;
  privateKey: string;
  uuid: string;
}

export function generateSolanaKeyPair(): generateSolanaKeyPairReturnType {
  const mnemonic = getMnemonic();
  const seed = bip39.mnemonicToSeedSync(mnemonic);

  const derivedSeed = derivePath("m/44'/501'/0'/0'", seed.toString('hex')).key;

  const keypair = Keypair.fromSeed(new Uint8Array(derivedSeed));

  const publicKey = keypair.publicKey.toString();
  const privateKey = Buffer.from(keypair.secretKey).toString('hex');
  const uuid = uuidv4();

  return { publicKey, privateKey, uuid };
}
