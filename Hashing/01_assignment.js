import crypto from 'crypto'

function findHashFromInput (prefix) {

    let input = 0
    while (true) {
        let inputString = input.toString()
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