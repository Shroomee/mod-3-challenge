// Assignment Code
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


function verifyPasswordLength(passwordLength){
  window.prompt("How long is your password?")

  if(passwordLength<8){
    window.alert("Password should be more than 8 characters!")
    //return to previous method
  }
  else if(passwordLength>128){
  window.alert("Password has to be less than 128 characters!")
    //return to previous method 
  } 
verifyCharTypes()
}



function verifyCharTypes(){
  window.prompt("Do you want lowercase characters? Yes or No?");
    if (answer == "yes"){
      isLowercase = true
      console.log(isLowercase)
    }
    window.prompt("Do you want Uppercase characters? Yes or No?")
   if (answer == "yes"){
      isUppercase = true
    }
    window.prompt("Do you want Numbers? Yes or No?")
    if (answer == "yes"){
      isNumerics = true
    }
    window.prompt("Do you want Special characters? Yes or No?")
    if (answer == "yes"){
      isSpecialChar = true
    }
    if (isLowercase && isNumerics && isSpecialChar && isUppercase == false){
      window.alert("You must select at least one character type")
      verifyCharTypes()
    }
    else {
      //go to next method
    }
}

verifyPasswordLength()
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
