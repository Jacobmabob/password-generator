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

var characterSet = [randomLetterLower, randomLetterUpper, randomNumber, randomSpecialCharacter]
var randomCharacter = characterSet[Math.floor(Math.random() * characterSet.length)]





// var randomCharacter = newCharacterSet[Math.floor(Math.random() * characterSet.length)]

// console.log(randomCharacter)
// Write password to the #password input
function writePassword() {
  var password = generatePassword()    
  var passwordText = document.querySelector("#password");
    function generatePassword() {
      function generateRandomCharacter() {

        var lowercasePrompt = prompt("Would you like to use lowercase letters?","Y/N");
        if (lowercasePrompt === 'Y') {
          // console.log(characterSet);
          // console.log(randomCharacter);
        } else if (lowercasePrompt === 'N') {
          var indexLower = characterSet.indexOf(randomLetterLower)
          var spliceLower = characterSet.splice(indexLower, 1);
          var randomCharacter = characterSet[Math.floor(Math.random() * characterSet.length)]
          // console.log(characterSet);
          // console.log(randomCharacter);
        } else console.log('Not a valid input')
        
        var uppercasePrompt = prompt("Would you like to use uppercase letters?","Y/N");
        if (uppercasePrompt === 'Y') {
          // console.log(characterSet);
          // console.log(randomCharacter);
        } else if (uppercasePrompt === 'N') {
          var indexUpper = characterSet.indexOf(randomLetterUpper)
          var spliceUpper = characterSet.splice(indexUpper, 1);
          var randomCharacter = characterSet[Math.floor(Math.random() * characterSet.length)]
          // console.log(characterSet);
          // console.log(randomCharacter);
        } else console.log('Not a valid input')
        
        var numberPrompt = prompt("Would you like to use numbers?","Y/N");
        if (numberPrompt === 'Y') {
          // console.log(characterSet);
          // console.log(randomCharacter);
        } else if (numberPrompt === 'N') {
          var indexNumber = characterSet.indexOf(randomNumber)
          var spliceNumber = characterSet.splice(indexNumber, 1);
          var randomCharacter = characterSet[Math.floor(Math.random() * characterSet.length)]
          // console.log(characterSet);
          // console.log(randomCharacter);
        } else console.log('Not a valid input')
        
        var specialCharacterPrompt = prompt("Would you like to use special characters?","Y/N");
        if (specialCharacterPrompt === 'Y') {
          // console.log(characterSet);
          // console.log(randomCharacter);
        } else if (specialCharacterPrompt === 'N') {
          var indexSpecial = characterSet.indexOf(randomSpecialCharacter)
          var spliceSpecial = characterSet.splice(indexSpecial, 1);
          var randomCharacter = characterSet[Math.floor(Math.random() * characterSet.length)]
          // console.log(characterSet);
          // console.log(randomCharacter);
        } else console.log('Not a valid input')
      }
        
        var passwordLengthPrompt = prompt("How many characters would you like to use?", "Enter a number between 8 and 128 :)")
        for 
          
    
    

  }

  passwordText.value = password;

}

// console.log(characterSet.length)

// generatePassword() {
//   prompt("Would you like to use lowercase letters?");
// }






// console.log(randomCharacter);
// console.log(generatePassword())
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);