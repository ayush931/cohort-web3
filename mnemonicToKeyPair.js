"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nacl = require("tweetnacl");
var bip39_1 = require("bip39");
var ed25519_hd_key_1 = require("ed25519-hd-key");
var web3_js_1 = require("@solana/web3.js");
var mnemonic = 'light foot because wine fever orient boring boat layer pledge pet replace';
var seed = (0, bip39_1.mnemonicToSeedSync)(mnemonic);
for (var i = 0; i < 4; i++) {
    var path = "m/44'/501'/".concat(i, "'/0'"); // This is the derivation path
    var derivedSeed = (0, ed25519_hd_key_1.derivePath)(path, seed.toString("hex")).key;
    var secret = new Uint8Array(nacl.sign.keyPair.fromSeed(derivedSeed).secretKey);
    console.log(web3_js_1.Keypair.fromSecretKey(secret).publicKey.toBase58());
}
