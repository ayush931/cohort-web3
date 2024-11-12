import { generateMnemonic, mnemonicToSeedSync } from "bip39";

const mnemonic = generateMnemonic(128)
const seed = mnemonicToSeedSync(mnemonic)

console.log(mnemonic)
console.log(seed)