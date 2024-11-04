let bytes = new Uint8Array([0, 134, 255, 256, 221])
console.log(bytes)

// ++++++++++++++++++++++++++++++++

// Bytes to AscII

function bytesToAscii (bytesData) {
    return new TextDecoder().decode(bytesData)
}

const byte = new Uint8Array([72, 101, 108, 108, 111])
const asciiChar = bytesToAscii(byte)
console.log(asciiChar)

// ++++++++++++++++++++++++++++++++

// AscII to Char

function asciiToChar (asciiArray) {
    return new Uint8Array([...asciiArray].map(char => char.charCodeAt(0)))
}

const string = "Hello"
const asciiCode = asciiToChar(string)
console.log(asciiCode)

// +++++++++++++++++++++++++++++++++++++++

// AscII to Char

function asciiToChar2 (asciiString) {
    let arr = []
    for (let i = 0; i < asciiString.length; i++) {
        const char = asciiString[i]
        arr.push(char.charCodeAt(0))
    }
    return new Uint8Array(arr)
}

const str = "Hello"
const asc = asciiToChar2(str)
console.log(asc)

// +++++++++++++++++++++++++++++++++++

// Bytes to AscII

function bytesToAscii2 (byteString) {
    return byteString.map(byte => String.fromCharCode(byte)).join("")
}

const bytes2 = [72, 101, 108, 108, 111]
console.log(bytesToAscii2(bytes2))

// +++++++++++++++++++++++++++++++++++++++++

// Array to Hex

function arrayToHex (byteArray) {
    let hexString = ""
    for (let i = 0; i < byteArray.length; i++) {
        hexString += byteArray[i].toString(16).padStart(2, '0')
    }
    return hexString
}

const byteArray = ([72, 101, 108, 108, 111])
console.log(arrayToHex(byteArray))

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Hex to Array

function hexToArray(hexString) {
    const byteArray = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < byteArray.length; i++) {
      byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return byteArray;
  }

const hex = "48656c6c6f"
console.log(hexToArray(hex))

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Bytes to Base 64

const bytesArray = new Uint8Array([72, 101, 108, 108, 111])
const base64Encoded = Buffer.from(bytesArray).toString('base64')
console.log(base64Encoded)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Base 58 (encoding)

import bs58 from 'bs58'

function uint8ArrayToBase64 (uint8Array) {
    return bs58.encode(uint8Array)
}

const array = new Uint8Array([72, 101, 108, 108, 111])
const base58String = uint8ArrayToBase64(array)
console.log(base58String)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Base 58 (decoding)

function base64ToUint8Array (base58String) {
    return bs58.decode(base58String)
}

const base58 = base58String
console.log(base64ToUint8Array(base58))