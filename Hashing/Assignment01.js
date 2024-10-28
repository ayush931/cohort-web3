// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

import crypto from 'crypto'

function hashMapToInput (prefix) {
    let input = 0
    while (true) {
        let inputStr = input.toString()
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex')
        if (hash.startsWith(input)) {
            return { input: inputStr, hash: hash }
        }
        input++
    }
}

const result = hashMapToInput('00000')
console.log(`input: ${result.input}`)
console.log(`hash: ${result.hash}`)