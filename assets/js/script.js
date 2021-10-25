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

  var passLength = prompt("How long would you like your password to be? (8-128 characters)")
  if (passLength < 8 || passLength > 128) {
    alert("Please choose a value between 8-128.")
    writePassword();
  } else if (!passLength) {
    alert("Please choose a value between 8-128.")
    writePassword();
  } 

  var lowerConfirm = prompt("Would you like lowercase letters in your password? Please type 'yes' or 'no'.");
  lowerConfirm = lowerConfirm.toLowerCase();
  if (lowerConfirm === 'yes') {
    var lowerConfirm = true;
  } else if (lowerConfirm === 'no') {
    var lowerConfirm = false;
  } else {
    console.log("wtf");
    alert("Please provide a valid response.")
    writePassword();
    }

  var upperConfirm = prompt("Would you like uppercase letters in your password? Please type 'yes' or 'no'.");
  upperConfirm = lowerConfirm.toLowerCase();
  if (upperConfirm === 'yes') {
    var upperConfirm = true;
  } else if (upperConfirm === 'no') {
    var upperConfirm = false;
  } else {
    console.log("wtf");
    alert("Please provide a valid response.")
    writePassword();
    }

  var numConfirm = prompt("Would you like numbers in your password? Please type 'yes' or 'no'");
  numConfirm = numConfirm.toLowerCase();
  if (numConfirm === 'yes') {
    var numConfirm = true;
  } else if (numConfirm === 'no') {
    var numConfirm = false;
  } else {
    console.log("wtf");
    alert("Please provide a valid response.")
    writePassword();
    }

  var charConfirm = prompt("Would you like numbers in your password? Please type 'yes' or 'no'");
  charConfirm = charConfirm.toLowerCase();
  if (charConfirm === 'yes') {
    var charConfirm = true;
  } else if (charConfirm === 'no') {
    var charConfirm = false;
  } else {
    console.log("wtf");
    alert("Please provide a valid response.")
    writePassword();
    }

  
  



     

    
  
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// not sure if this works 
// var passLength = function() {
  //   passLength = prompt("How long would you like your password to be) (8-128 characters)")
  //   if (passLength < 8 || passLength > 128) {
  //     alert("Please choose a value between 8-128.")
  //     passLength();
  //   } else {
  //     console.log("yee");
  //   }
  // }