// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//--------------------------------------------------------
//Created a prompt for criteria 1 and confirms for criteria 2, 3 and 4 and declared them in a variable to retain user input
var charLength = prompt("In order to generate a password, please choose a character length between 8 - 128.");
console.log(charLength);

var lowerCase = confirm("Would you like your new password to contain UPPER case letters?");
console.log(lowerCase);

var numValues = confirm("Would you like your new password to contain numeric values?");
console.log(numValues);

var specialChar = confirm("Would you like your new password to contain special characters? (ex. !, @, #, $)");
console.log(specialChar);

if (charLength > 7 && charLength < 129) {
  confirm("");
}
else {
  prompt("");

}
