const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the password validator tool!")

reader.question("Please enter a password: ", function(password){
	
    if (password.length < 10) {
        console.log("Your password has failed, it is too short")
    } else {
        console.log("Your password has passed, it is long enough!")
    }

    reader.close()
});