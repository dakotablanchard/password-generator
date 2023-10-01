var userLength
var choice = []

var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var spChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "~"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //When button is clicked, the function writePassword() is ran

// Write password to the #password input
function writePassword() {

  userInput() // Gathers input from the user
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password; // What gets printed in the box is the value of the variable 'password' 
  
}

function generatePassword() { // The variable 'password' stores this function, so this function needs to return what is going to be printed

  var newPass = ""
  for (var i = 0; i < userLength; i++) { // This loop will repeat until the variable 'newPass' contains same the amount of characters selected by the user in the variable 'userLength'
    var randomIndex = Math.floor(Math.random() * choice.length); // Chooses a random number between 0 and the length of the 'choice' array, stores number in the variable 'randomIndex'
    newPass = newPass + choice[randomIndex]; // Adds a new value to the variable 'newPass' by taking the randomly generated number and using it as the index selector for the choice array
  }

  return newPass  /* Value containing newly generated password */ ; 
} 


function userInput() {

    userLength = prompt("How long do you want your password to be? Enter a number 8-128") // This will get a number from the user and store it in the variable 'userLength'

    if (userLength < 8 || userLength > 128) { // Makes it so the user can only input a value between 8-128
      alert("Character length invalid.")
      return false;
    } 

    if (confirm("Do you want to include lowercase letters? Okay for yes, Cancel for no")) { // This will get a boolean value from the user
      choice = choice.concat(lowerChar); // If true, this concatenates the 'lowerChar' array with the 'choice' array 
    }

    if (confirm("Do you want to include uppercase letters? Okay for yes, Cancel for no")) { // This will get a boolean value from the user
      choice = choice.concat(upperChar); // If true, this concatenates the 'upperChar' array with the 'choice' array 
    }
  
    if (confirm("Do you want to include numbers? Okay for yes, Cancel for no")) { // This will get a boolean value from the user
      choice = choice.concat(numbers); // If true, this concatenates the 'numbers' array with the 'choice' array 
    }
  
    if (confirm("Do you want to include special characters? Okay for yes, Cancel for no")) { // This will get a boolean value from the user
      choice = choice.concat(spChar); // If true, this concatenates the 'spChar' array with the 'choice' array 
    }
}







