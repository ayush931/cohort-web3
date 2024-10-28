// What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10

import crypto from 'crypto'

function findHashFromInput (prefix) {

    let input = 0
    while (true) {
        let inputString = 'harkirat => Raman | Rs 100 Ram => Ankit | Rs 10' + input.toString()
        let hash = crypto.createHash('sha256').update(inputString).digest('hex')
        if (hash.startsWith(prefix)) {
            return { input: inputString, hash: hash }
        }
        input++
    }
}

const result = findHashFromInput('00000')
console.log(`input: ${result.input}`)
console.log(`hash: ${result.hash}`)