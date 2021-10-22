// Assignment code here
// When user clicks generate password
// Prompt for 8-128 characters
//   input < 7, loop back
//   input > 128, loop back
//   Input between 8-128, 
//     Confirm for  lowercase
//       If yes or no, go on 
//       if invalid, reprompt
//     Confirm for uppercase, numeric, and special characters
//     Validate?? 
//     Generate password 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
