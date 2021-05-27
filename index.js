const writeInBlue = require('little_sister')
const leftPad = require('left-pad')

console.log(
    writeInBlue(
        leftPad('Hello, from big sister', 5)
    )
)
