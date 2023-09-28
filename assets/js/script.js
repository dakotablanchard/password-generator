// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var length = prompt("How long do you want your password to be? Enter a number 8-128")

    if (length < 8) {
      alert("Please try again with a number between 8-128")
    }

  var lowercase = confirm("Do you want to include lowercase letters? Okay for yes, Cancel for no")

  var uppercase = confirm("Do you want to include uppercase letters? Okay for yes, Cancel for no")

  var numeric = confirm("Do you want to include numbers? Okay for yes, Cancel for no")

  var specialCharacter = confirm("Do you want to include special characters? Okay for yes, Cancel for no")

  console.log(length)


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

