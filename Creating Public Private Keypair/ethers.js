"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
// Generate a random wallet
var wallet = ethers_1.ethers.Wallet.createRandom();
// Extract the public and private keys
var publicKey = wallet.address;
var privateKey = wallet.privateKey;
console.log("Public Key (Address):", publicKey);
console.log("Private Key:", privateKey);
// Message to sign
var message = "hello world";
// Sign the message using the wallet's private key
var signature = await wallet.signMessage(message);
console.log("Signature:", signature);
// Verify the signature
var recoveredAddress = ethers_1.ethers.verifyMessage(message, signature);
console.log("Recovered Address:", recoveredAddress);
console.log("Signature is valid:", recoveredAddress === publicKey);
