// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabetLower = 'abcdefghijklmnopqrstuvwxyz'
var randomLetterLower = alphabetLower[Math.floor(Math.random() * alphabetLower.length)]

var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var randomLetterUpper = alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]

var specialCharacter = "!#$%&'()*+,-./:;<=>?@][^_`{|}~"
var randomSpecialCharacter = specialCharacter[Math.floor(Math.random() * specialCharacter.length)]

var number = '123456789'
var randomNumber = [Math.floor(Math.random() * number.length)]

var character = [randomLetterUpper, randomSpecialCharacter, randomLetterLower, randomNumber]
var randomCharacter = character[Math.floor(Math.random() * character.length)]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generatePassword() 



console.log(randomSpecialCharacter);
console.log(randomLetterUpper);
console.log(randomLetterLower);
console.log(randomNumber)
console.log(randomCharacter)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
