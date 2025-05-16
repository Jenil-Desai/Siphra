import { generateMnemonic, mnemonicToSeedSync } from "bip39";

interface SeedAndMnemonic {
  seed: Uint8Array;
  mnemonic: string;
}

export function generateSeed() {
  const mnemonic = generateMnemonic();
  const seed = mnemonicToSeedSync(mnemonic);
  const finalSeed = new Uint8Array(seed);
  return { finalSeed, mnemonic };
}

export function getSeed() {
  const existingSeed = localStorage.getItem("seedAndMnemonic");
  if (existingSeed) {
    const seedAndMnemonic: SeedAndMnemonic = JSON.parse(existingSeed);
    return seedAndMnemonic.seed;
  } else {
    const { finalSeed, mnemonic } = generateSeed();
    localStorage.setItem("seedAndMnemonic", JSON.stringify({ seed: finalSeed, mnemonic }));
    return finalSeed;
  }
}

export function getMnemonic() {
  const existingSeed = localStorage.getItem("seedAndMnemonic");
  if (existingSeed) {
    const seedAndMnemonic: SeedAndMnemonic = JSON.parse(existingSeed);
    return seedAndMnemonic.mnemonic;
  } else {
    const { finalSeed, mnemonic } = generateSeed();
    localStorage.setItem("seedAndMnemonic", JSON.stringify({ seed: finalSeed, mnemonic }));
    return mnemonic;
  }
}
