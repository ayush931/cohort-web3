// What if I ask you that the input string should start with 100xdevs ? How would the code change?

import crypto from 'crypto'

function findHashThroughInput (prefix) {

    let input = 0;
    while (true) {
        let inputString = '100xdevs' + input.toString()
        let hash = crypto.createHash('sha256').update(inputString).digest('hex')
        if (hash.startsWith(prefix)) {
            return { input: inputString, hash: hash }
        }
        input++
    }
}

const result = findHashThroughInput('00000')
console.log(`input: ${result.input}`)
console.log(`hash: ${result.hash}`)