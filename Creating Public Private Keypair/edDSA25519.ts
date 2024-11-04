import * as ed from '@noble/ed25519';

async function main () {
    // Generate a secure random private key
    const privateKey = ed.utils.randomPrivateKey()

    // Convert the message to the Uint8Array
    const message = new TextEncoder().encode("Hello World")

    // Generate public key from private key
    const publicKey = await ed.getPublicKeyAsync(privateKey)

    // Sign the message using private key
    const signature = await ed.signAsync(message, privateKey)

    // Verify the signature using the public key
    const isVerified = await ed.verifyAsync(signature, message, publicKey)

    console.log(isVerified)
}

main()