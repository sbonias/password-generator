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
//Created a prompt (User Input) for criteria 1 & declared a variable to retain user input & created IF/ELSE Stmt to provide action steps

var charLength = prompt("In order to generate a password, please choose a character length between 8 - 128.");
console.log(charLength);

if (charLength > 7 && charLength < 129) {
  confirm("Run a function");
}
else {
  (charLength > 128)
  confirm("Length needs to be between 8-128 characters");
}


//Created an arrary of lower case letters & Created a confirm (True or False) for criteria 2 & declared a variable to retain user input & created IF/ELSE Stmt to provide action steps

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lowerCase = confirm("Would you like your new password to contain UPPER case letters?");
console.log(lowerCase);
if (lowerCase === true) {
  confirm("Run a function");
}
else {
  (lowerCase === false)
  confirm("Don't run anything");
}

//Created an arrary of UPPER case letters & Created a confirm (True or False) for criteria 3 & declared a variable to retain user input & created IF/ELSE Stmt to provide action steps

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var upperCase = confirm("Would you like your new password to contain UPPER case letters?");
console.log(upperCase);
if (upperCase === true) {
  confirm("Run a function");
}
else {
  (upperCase === false)
  confirm("Don't run anything");
}

//Created a confirm (True or False) for criteria 3 & declared a variable to retain user input & created IF/ELSE Stmt to provide action steps

var numValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

var numValues = confirm("Would you like your new password to contain numeric values?");
console.log(numValues);
if (numValues === true) {
  confirm("Run a function");
}
else {
  (numValues === false)
  confirm("Don't run anything");
}

//Created an array of Special Characters & Created a confirm (True or False) for criteria 4 & declared a variable to retain user input & created IF/ELSE Stmt to provide action steps

var specialChar = ["!", "@", "#", "$"];

var specialChar = confirm("Would you like your new password to contain special characters? (ex. !, @, #, $)");
console.log(specialChar);

if (specialChar === true) {
  confirm("Run a function");
}
else {
  (specialChar === false)
  confirm("Don't run anything");
}




