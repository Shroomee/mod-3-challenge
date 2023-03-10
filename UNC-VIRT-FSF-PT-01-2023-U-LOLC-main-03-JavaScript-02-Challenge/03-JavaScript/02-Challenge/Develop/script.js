// variable list
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!#$%&'()*+,-./:;<=>?@][^_`{|}~"
var numerics = "0123456789"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passwordLength = 0
var isLowercase = false
var isUppercase = false
var isNumerics = false
var isSpecialChar = false
var answer = ""
var combineChar = ""

//function for verifying password lengths
function verifyPasswordLength() {
  passwordLength = window.prompt("How long is your password?")
  if (isNaN(passwordLength)) {
    window.alert("password length must be a number between 8-128")
    verifyPasswordLength()
  }
  if (passwordLength < 8) {
    window.alert("Password should be more than 8 characters!")
    verifyPasswordLength()
  }
  else if (passwordLength > 128) {
    window.alert("Password has to be less than 128 characters!")
    verifyPasswordLength()
  }

  verifyCharTypes()
}


//prompts for specific password requests
function verifyCharTypes() {
  answer = window.prompt("Do you want lowercase characters? yes or no?");
  if (!(answer == "yes" || answer == "no")) {
    window.alert("please say yes or no")
    verifyCharTypes()
  }
  if (answer.toLowerCase() === "yes") {
    isLowercase = true
    console.log(isLowercase)
  }
  answer = window.prompt("Do you want Uppercase characters? yes or no?")
  if (!(answer == "yes" || answer == "no")) {
    window.alert("please say yes or no")
    verifyCharTypes()
  }
  if (answer.toLowerCase() === "yes") {
    isUppercase = true
    console.log(isUppercase)
  }
  answer = window.prompt("Do you want Numbers? yes or no?")
  if (!(answer == "yes" || answer == "no")) {
    window.alert("please say yes or no")
    verifyCharTypes()
  }
  if (answer.toLowerCase() === "yes") {
    isNumerics = true
    console.log(isNumerics)
  }
  answer = window.prompt("Do you want Special characters? yes or no?")
  if (!(answer == "yes" || answer == "no")) {
    window.alert("please say yes or no")
    verifyCharTypes()
  }
  if (answer.toLowerCase() === "yes") {
    isSpecialChar = true
    console.log(isSpecialChar)
  }
  if (isLowercase == false && isNumerics == false && isSpecialChar == false && isUppercase == false) {
    window.alert("You must select at least one character type")
    verifyCharTypes()
  }
  createPasswordCharPool()
}
// function to make a single string to choose things from
function createPasswordCharPool() {
  if (isLowercase == true) {
    combineChar = combineChar + lowerCase
  }
  if (isUppercase == true) {
    combineChar = combineChar + upperCase
  }
  if (isNumerics == true) {
    combineChar = combineChar + numerics
  }
  if (isSpecialChar == true) {
    combineChar = combineChar + specialChar
  }
  writePassword()
  console.log(combineChar)
}

//function for choosing randomly what password is
function generatePassword() {
  console.log(passwordLength)
  for (var i = 0; i <= passwordLength; i++) {
    password += combineChar.charAt(Math.floor(Math.random() * combineChar.length))
  }
  return password
}


//run function

verifyPasswordLength()


// Write password to the #password input
function writePassword() {
  password = ""
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
