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

function generatePassword() {
  var passLength = prompt("How long would you like your password to be? (8-128 characters)")
  if (passLength < 8 || passLength > 128) {
    alert("Please provide a value between 8-128 characters for your password length.");
    writePassword();
  } else if (!passLength) {
    alert("Please provide a value between 8-128 characters for your password length.");
    writePassword();
  } else if (isNaN(passLength)) {
    alert("Please provide a value between 8-128 characters for your password length.");
    writePassword();
    } 
  


  var lowerConfirm = prompt("Would you like lowercase letters in your password? Please type 'yes' or 'no'.");
  lowerConfirm = lowerConfirm.toLowerCase();
  if (lowerConfirm === 'yes') {
    var lowerConfirm = 'abcdefghijklmnopqrstuvwxyz';
  } else if (lowerConfirm === 'no') {
    var lowerConfirm = '';
  } else {
    alert("Please provide a valid response.")
    writePassword();
    }



  var upperConfirm = prompt("Would you like uppercase letters in your password? Please type 'yes' or 'no'.");
  upperConfirm = upperConfirm.toLowerCase();
  if (upperConfirm === 'yes') {
    var upperConfirm = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else if (upperConfirm === 'no') {
    var upperConfirm = '';
  } else {
    alert("Please provide a valid response.")
    writePassword();
  }



  var numConfirm = prompt("Would you like numbers in your password? Please type 'yes' or 'no'.");
  numConfirm = numConfirm.toLowerCase();
  if (numConfirm === 'yes') {
    var numConfirm = '1234567890';
  } else if (numConfirm === 'no') {
    var numConfirm = '';
  } else {
    alert("Please provide a valid response.")
    writePassword();
    }



  var charConfirm = prompt("Would you like special characters in your password? Please type 'yes' or 'no'.");
  charConfirm = charConfirm.toLowerCase();
  if (charConfirm === 'yes') {
    var charConfirm = '!"#$%&()*+,-/:;<=>?@[`]^_{}~';
  } else if (charConfirm === 'no') {
    var charConfirm = '';
  } else {
    alert("Please provide a valid response.")
    writePassword();
    }
  
  // check the user has entered at least one parameter
  if (lowerConfirm.length > 2 || upperConfirm.length > 2 
    || numConfirm.length > 2 || charConfirm.length > 2)  {
    
    var password = lowerConfirm + upperConfirm + numConfirm + charConfirm;
    console.log(password);
    console.log(passLength);
    var result = '';
    for ( var i = 0; i < passLength; i++ ) {
      result += password.charAt(Math.floor((Math.random() * password.length)));
    }
    return result;
    
  } else {
    alert("You must choose at least one parameter to include in your password.")
    writePassword();
    return;
  }

    
    // why when passLength = 10, password is 9 characters? 
  
}
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  console.log(password);
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

