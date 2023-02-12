// variable list
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!#$%&'()*+,-./:;<=>?@][^_`{|}~"
var numerics = "0123456789"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passwordLength = 0;
var isLowercase= false
var isUppercase = false
var isNumerics = false
var isSpecialChar = false
var answer = ""

//function for verifying password lengths
function verifyPasswordLength(passwordLength){
  passwordLength = window.prompt("How long is your password?")

  if(passwordLength<8){
    window.alert("Password should be more than 8 characters!")
    verifyPasswordLength()
  }
  else if(passwordLength>128){
  window.alert("Password has to be less than 128 characters!")
    verifyPasswordLength()
  } 
verifyCharTypes()
}


//prompts for specific password requests
function verifyCharTypes(){
  answer = window.prompt("Do you want lowercase characters? Yes or No?");
    if (answer == "yes"){
      isLowercase = true
      console.log(isLowercase)
    }
   answer = window.prompt("Do you want Uppercase characters? Yes or No?")
    if (answer == "yes"){
      isUppercase = true
      console.log(isUppercase)
    }
   answer = window.prompt("Do you want Numbers? Yes or No?")
    if (answer == "yes"){
      isNumerics = true
      console.log(isNumerics)
    }
    answer = window.prompt("Do you want Special characters? Yes or No?")
    if (answer == "yes"){
      isSpecialChar = true
      console.log(isSpecialChar)
    }
    if (isLowercase == false && isNumerics == false && isSpecialChar == false && isUppercase == false){
      window.alert("You must select at least one character type")
      verifyCharTypes()
    }
}

function generatePassword(){

}
password = generatePassword()
verifyPasswordLength()


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
