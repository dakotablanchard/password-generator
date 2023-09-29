// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, isLower, isUpper, isNumeric, isCharacter) { 
  // The variable 'password' stores this function, so this function needs to return what is going to be printed

  var userLength = prompt("How long do you want your password to be? Enter a number 8-128")

  var userLower = confirm("Do you want to include lowercase letters? Okay for yes, Cancel for no")

  var userUpper = confirm("Do you want to include uppercase letters? Okay for yes, Cancel for no")

  var userNumeric = confirm("Do you want to include numbers? Okay for yes, Cancel for no")

  var userSpChar = confirm("Do you want to include special characters? Okay for yes, Cancel for no")
  
  var lowerCharArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upperCharArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var spCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "~"]

// if userLower, choose random index from lowerCharArray
// if userUpper, choose random index from upperCharArray
// if userNumeric, choose random index from userNumeric
// if userSpChar, choose random index from spCharArra

  return "New Password" /* This is where value containing generated password will go */ ; 
} 

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // What gets printed in the box
  
  passwordText.value = password; // What gets printed in the box is a value of the variable 'password' 
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

