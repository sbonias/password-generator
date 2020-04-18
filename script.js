// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//-------------code above this line was provided--------------
//Declare variables
var charLength
var lowerCase
var upperCase
var numValues
var specialChar
var finalPassword

//Document Arrays
var arrLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrNumValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
var arrSpecialChar = ["!", "@", "#", "$", "<", ">", "%", "+", "*"];
var arrPrelimPassword = [];
var arrRandomPassword = [];

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
    console.log(charLength);
  }

  //Input criteria 2-4 = lowerCase, upperCase, numValues, specialChar

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

  //create a new variable + IF Stmt to randomly apply a value from the variables corresponding array based on user input (true of false)
  //use "Math.floor(Math.random()" formula for random generation of array values
  //https://www.kirupa.com/html5/picking_random_item_from_array.htm
  //Placed the IF statements inside a "for loop" so that the code would run until the charLength requirements are met
  //Number of "true" IF Stmts * charLength = random items generated
  //At this point I noticed that I needed to store the output from the Loop of the IF Stmt to an Array
  //Created "arrPrelimPassword" array and used the special method of "push" to populate this Array with preliminary pw values

  for (var i = 0; i < charLength; i++) {
    if (lowerCase === true) {
      var randomLowerCase = arrLowerCase[Math.floor(Math.random() * arrLowerCase.length)]
      arrPrelimPassword.push(randomLowerCase);
      console.log(randomLowerCase);
    }
    if (upperCase === true) {
      var randomUpperCase = arrUpperCase[Math.floor(Math.random() * arrUpperCase.length)]
      arrPrelimPassword.push(randomUpperCase);
      console.log(randomUpperCase);

    }
    if (numValues === true) {
      var randomNumValues = arrNumValues[Math.floor(Math.random() * arrNumValues.length)]
      arrPrelimPassword.push(randomNumValues);
      console.log(randomNumValues);

    }
    if (specialChar === true) {
      var randomSpecialChar = arrSpecialChar[Math.floor(Math.random() * arrSpecialChar.length)]
      arrPrelimPassword.push(randomSpecialChar);
      console.log(randomSpecialChar);

    }
  }

  console.log(arrPrelimPassword);

  //applied array method "join", this takes the elements of an array and joins them together in a string
  arrPrelimPassword = arrPrelimPassword.join("");
  console.log(arrPrelimPassword);

  //Created another "for loop" so that the code runs until the charLength requirements are met
  //Declared a new variable "randomPassword" to store results of loop
  //Wrote code so that each time the loop runs through the array "arrPrelimPassword" it pushes a randomly selected value to a new array "arrRandomPassword"
  for (var i = 0; i < charLength; i++) {
    randomPassword = arrPrelimPassword[Math.floor(Math.random() * arrPrelimPassword.length)];
    arrRandomPassword.push(randomPassword);
    console.log(randomPassword);
  }
  console.log(arrRandomPassword);

  //applied array method "join", this takes the elements of an array and joins them together in a string
  //converting array to string; "arrRandomPassword" to "finalPassword"
  finalPassword = arrRandomPassword.join("");
  console.log(finalPassword);
  //needed "return" to end function and output value to text-form section of browser
  return finalPassword;
}

