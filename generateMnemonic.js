"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bip39_1 = require("bip39");
var mnemonic = (0, bip39_1.generateMnemonic)(128);
var seed = (0, bip39_1.mnemonicToSeedSync)(mnemonic);
console.log(mnemonic);
console.log(seed);
