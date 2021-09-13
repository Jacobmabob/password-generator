// Assignment Code
var generateBtn = document.querySelector("#generate");


var alphabetLower = 'abcdefghijklmnopqrstuvwxyz'
var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var specialCharacter = "!#$%&'()*+,-./:;<=>?@][^_`{|}~"
var number = '123456789'

// var choices = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword()    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {

  var choices = ""
  var passwordLength = prompt('How many characters would you like to use?', 'Enter a number between 8 and 128');
  if ( passwordLength !==  8 <= passwordLength <= 128 ) {
    alert('Please enter a number between 8 and 128');
    return; 
  }

  var lowercaseConfirm = confirm('Would you like to use lowercase letters?');
  if (lowercaseConfirm) {
    choices += alphabetLower;

  }

  var uppercaseConfirm = confirm('Would you like to use uppercase letters?');
  if (uppercaseConfirm) {
    choices += alphabetUpper; 
  }
  
  var numberConfirm = confirm('Would you like to use numbers?');
  if (numberConfirm) {
    choices += number; 
  }
  
  var specialCharConfirm = confirm('Would you like to use special characters?');
  if (specialCharConfirm) {
    choices += specialCharacter;
  }

  if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialCharConfirm) {
    alert('You must select at least one type of character!');
  }

  var passwordString = ''
  for (i = 0; i <= passwordLength; i++) {
  passwordString += choices.charAt(Math.floor(Math.random() * choices.length));
  }
  
  return passwordString



}   
    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);