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
  console.log("Write password:", userLength)
  userInput()
  console.log("After user input and write password", userLength)
  var password = generatePassword(); // The variable 'password' stores this function, so this function needs to return what is going to be printed
  var passwordText = document.querySelector("#password"); // What gets printed in the box
  
  passwordText.value = password; // What gets printed in the box is a value of the variable 'password' 
  
}

function generatePassword() { 

  var newPass = ""
  for (var i = 0; i < userLength; i++) {
    var randomIndex = Math.floor(Math.random() * choice.length);
    newPass = newPass + choice[randomIndex];
  }

  return newPass  /* This is where value containing generated password will go */ ; 
} 


function userInput() {

    userLength = prompt("How long do you want your password to be? Enter a number 8-128") // This will get a number from the user

    if (userLength < 8 || userLength > 128) {
      alert("Character length invalid.")
      return false;
    } 

    if (confirm("Do you want to include lowercase letters? Okay for yes, Cancel for no")) { // This will get a boolean value from the user
      choice = choice.concat(lowerChar);
    }

    if (confirm("Do you want to include uppercase letters? Okay for yes, Cancel for no")) { // This will get a boolean value from the user
      choice = choice.concat(upperChar);
    }
  
    if (confirm("Do you want to include numbers? Okay for yes, Cancel for no")) { // This will get a boolean value from the user
      choice = choice.concat(numbers);
    }
  
    if (confirm("Do you want to include special characters? Okay for yes, Cancel for no")) { // This will get a boolean value from the user
      choice = choice.concat(spChar);
    }
}







