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

//-------------code above this line was provided--------------
//Declare variables
var charLength
var lowerCase
var upperCase
var numValues
var specialChar

//Document Arrays
var arrLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrNumValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
var arrSpecialChar = ["!", "@", "#", "$"];

//Input criteria 1 = charLength

//Created this function to allow for it to be called in line 6, placed all code inside of this since most of it will run only when this button is clicked
var generatePassword = function () {

  //inital prompt for charLength
  var charLength = prompt("In order to generate a password, please choose a character length between 8 - 128.");
  console.log(charLength);

  //created a while loop to force the user to enter the correct character length
  while (charLength < 8 || charLength > 128) {
    alert("Character length requirements not met, please choose a character length between 8 - 128");
    var charLength = prompt("In order to generate a password, please choose a character length between 8 - 128.");
  }

  //Input criteria 2-4

  //confirm for lowerCase to yield "true or false" result
  var lowerCase = confirm("Would you like your new password to contain lower case letters? OK = Yes | Cancel = No");
  console.log(lowerCase)
  //confirm for upperCase to yield "true or false" result
  var upperCase = confirm("Would you like your new password to contain UPPER case letters? OK = Yes | Cancel = No");
  console.log(upperCase)
  //confirm for numeric numValues to yield "true or false" result
  var numValues = confirm("Would you like your new password to contain numeric values? OK = Yes | Cancel = No");
  console.log(numValues)
  //confirm for specialChar to yield "true or false" result
  var specialChar = confirm("Would you like your new password to contain special characters? (ex. !, @, #, $) OK = Yes | Cancel = No");
  console.log(specialChar)

  //created a while loop to force the user to select at least 1 of the criteria
  //false doesn't require a parenthesis because it's a boolean
  while (lowerCase === false && upperCase === false && numValues === false && specialChar === false) {
    alert("At least one of the four sets of criteria must be selected");
    var lowerCase = confirm("Would you like your new password to contain lower case letters? OK = Yes | Cancel = No");
    var upperCase = confirm("Would you like your new password to contain UPPER case letters? OK = Yes | Cancel = No");
    var numValues = confirm("Would you like your new password to contain numeric values? OK = Yes | Cancel = No");
    var specialChar = confirm("Would you like your new password to contain special characters? (ex. !, @, #, $) OK = Yes | Cancel = No");
  }

  //create a new variable + IF Stmt to randomly apply a value from the variables corresponding array based on user input
  //use "Math.floor(Math.random()" formula for random generation
  if (lowerCase === true) {
    let randomLowerCase = arrLowerCase[Math.floor(Math.random() * arrLowerCase.length)];
    console.log(randomLowerCase);
  }
  if (upperCase === true) {
    let randomUpperCase = arrUpperCase[Math.floor(Math.random() * arrUpperCase.length)];
    console.log(randomUpperCase);
  }
  if (numValues === true) {
    let randomNumValues = arrNumValues[Math.floor(Math.random() * arrNumValues.length)];
    console.log(randomNumValues);
  }
  if (specialChar === true) {
    let randomSpecialChar = arrSpecialChar[Math.floor(Math.random() * arrSpecialChar.length)];
    console.log(randomSpecialChar);
  }
}


  // if (charLength > 7 && charLength < 129) {
  //   confirm("Run a function");
  // }
  // else {
  //   (charLength)
  //   confirm("Length needs to be between 8-128 characters");
  // }

  // //Created an arrary of lower case letters & Created a confirm (True or False) for criteria 2 & declared a variable to retain user input & created IF/ELSE Stmt to provide action steps

  // var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  //   "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // var lowerCase = confirm("Would you like your new password to contain lower case letters?");
  // console.log(lowerCase);
  // if (lowerCase === true) {
  //   confirm("Run a function");
  // }
  // else {
  //   (lowerCase === false)
  //   confirm("Don't run anything");
  // }

  // //Created an arrary of UPPER case letters & Created a confirm (True or False) for criteria 3 & declared a variable to retain user input & created IF/ELSE Stmt to provide action steps

  // var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // var upperCase = confirm("Would you like your new password to contain UPPER case letters?");
  // console.log(upperCase);
  // if (upperCase === true) {
  //   confirm("Run a function");
  // }
  // else {
  //   (upperCase === false)
  //   confirm("Don't run anything");
  // }

  // //Created a confirm (True or False) for criteria 3 & declared a variable to retain user input & created IF/ELSE Stmt to provide action steps

  // var numValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

  // var numValues = confirm("Would you like your new password to contain numeric values?");
  // console.log(numValues);
  // if (numValues === true) {
  //   confirm("Run a function");
  // }
  // else {
  //   (numValues === false)
  //   confirm("Don't run anything");
  // }

  // //Created an array of Special Characters & Created a confirm (True or False) for criteria 4 & declared a variable to retain user input & created IF/ELSE Stmt to provide action steps

  // var specialChar = ["!", "@", "#", "$"];

  // var specialChar = confirm("Would you like your new password to contain special characters? (ex. !, @, #, $)");
  // console.log(specialChar);

  // if (specialChar === true) {
  //   confirm("Run a function");
  // }
  // else {
  //   (specialChar === false)
  //   confirm("Don't run anything");
  // }




