"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var tweetnacl_1 = require("tweetnacl");
// Generate a new keypair
var keypair = web3_js_1.Keypair.generate();
// Extract the public and private keys
var publicKey = keypair.publicKey.toString();
var secretKey = keypair.secretKey;
// Display the keys
console.log("Public Key:", publicKey);
console.log("Private Key (Secret Key):", secretKey);
// Convert the message "hello world" to a Uint8Array
var message = new TextEncoder().encode("hello world");
var signature = tweetnacl_1.default.sign.detached(message, secretKey);
var result = tweetnacl_1.default.sign.detached.verify(message, signature, keypair.publicKey.toBytes());
console.log(result);
