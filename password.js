const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`
Welcome to the password validator tool!`)
reader.question(`
Please enter a password, it must include at least:
    - 10 letters
    - 1 capital letter
    - 1 number
    - 1 symbol (!@#$%&*?))
    Please enter here: `, function(password){
    passwordSplit = password.split('');

    //Checks for a symbol
    var symbolCheck = false
    var symbols = [`!`,`@`,`#`,`$`,`%`,`&`,`*`,`?`]
    var symbolsString = [`!@#$%&*?`]
    for (let i=0; i<8; i++) {
        if (password.includes(`${symbols[i]}`)) {
            symbolCheck = true
        }
    }

    //Checks for a number
    var numberCheck = false
    var numbers = [1,2,3,4,5,6,7,8,9,0]
    for (let i=0; i<10; i++) {
        if (password.includes(`${numbers[i]}`) === true) {
            numberCheck = true
        } 
    }

    //Checks for an uppercase letter
    var upperCaseCheck = false
    for (let i=0; i<password.length; i++) {
        if (passwordSplit[i] === passwordSplit[i].toUpperCase() &&  isNaN(passwordSplit[i]) && !symbols.includes(passwordSplit[i])) {
            upperCaseCheck = true
        } 
    }

    //Checks for length and completes the number/symbol/uppercase checks
     if (password.length < 10) {
        console.log(`
        Your password has failed, it is too short.
        `)
    } else if (numberCheck === false){
        console.log (`
        Your password must include a number.
        `)
    } else if (symbolCheck === false){
        console.log (`
        Your password must include a special character. (!@#$%&*?)
        `)
    } else if (upperCaseCheck === false){
        console.log (`
        Your password must include an uppercase letter.
        `)
    } else {
        console.log(`
        Your password has passed!
        `)
    }

 reader.close()
});