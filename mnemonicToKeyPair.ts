import * as nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

const mnemonic: string = 'light foot because wine fever orient boring boat layer pledge pet replace';

const seed: Buffer = mnemonicToSeedSync(mnemonic);

for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
  const derivedSeed: Buffer = derivePath(path, seed.toString("hex")).key;
  const secret: Uint8Array = new Uint8Array(nacl.sign.keyPair.fromSeed(derivedSeed).secretKey);
  console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}
