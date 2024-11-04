import * as secp from '@noble/secp256k1';
import { createHash } from 'crypto';

function sha256Hash(data: string): Uint8Array {
    return Uint8Array.from(createHash("sha256").update(data).digest());
}

async function main() {
    // Generate random private key
    const privateKey = secp.utils.randomPrivateKey();

    // SHA-256 of message
    const message = "Hello World";
    const messageHash = sha256Hash(message);

    // Generate the public key through the private key
    const publicKey = secp.getPublicKey(privateKey);

    // Sign the message using the private key
    const signature = await secp.signAsync(messageHash, privateKey);

    // Verify the signed message using public key
    const isValid = secp.verify(signature, messageHash, publicKey);

    // Display the result
    console.log("Signature is valid:", isValid);
}

main();
