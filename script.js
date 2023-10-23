// Assignment code
// Create the function final password for creating the password type otion, and create empty password string.
function finalPassword(
  length,
  lowerCaseType,
  upperCaseType,
  NumericType,
  specialCharsType
) {
  // create variables for each type and a random empty password
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericCharacters = "0123456789";
  const specialCharacters = "/^[!@#$%^&*()_+-=[]{};':|.<,>/?]*$/";
  var randomPassword = " ";

  // use concat to add each type to the random password string.
  if (lowerCaseType) {
    randomPassword = randomPassword.concat(lowerCase);
  }

  if (upperCaseType) {
    randomPassword = randomPassword.concat(upperCase);
  }
  if (NumericType) {
    randomPassword = randomPassword.concat(numericCharacters);
  }
  if (specialCharsType) {
    randomPassword = randomPassword.concat(specialCharacters);
  }

  //add password variable for password output
  var password = " ";

  // interate the loop to through all the added options to random password.

  for (let index = 0; index < length; index++) {
    const passwordIndex = Math.floor(Math.random() * randomPassword.length);
    password += randomPassword[passwordIndex];
  }
  // return password with optoins chosen
  return password;
}
// ask user for lenght
// choose lenght to be between 8 and 128 characters
// prompt user for lenght
// generate password function
function generatePassword() {
  // prompt user to choose a password lenght
  var choosePasswordLength = prompt(
    "choose the lenght of your password (between 8-128 characters)"
  );
  // convert inout into integer
  choosePasswordLength = parseInt(choosePasswordLength);
  // if the input is not a number or not between 8-128 it will show an alert of the input being invalid
  if (
    isNaN(choosePasswordLength) ||
    choosePasswordLength < 8 ||
    choosePasswordLength > 128
  ) {
    alert(
      "not a valid password length, the password length should be between 8-128"
    );
  } else {
    // choose incase lowercase
    const lowerCaseType = confirm(
      "Do you want Lowercase letters in your password?"
    );

    // choose incase uppercase
    const upperCaseType = confirm(
      "Do you want Uppercase letters in your password?"
    );

    // choose incase numeric
    const NumericType = confirm("Do you want Numbers in your password?");

    // choose incase special character
    const specialCharsType = confirm(
      "Do you want Special Characters in your password?"
    );

    // make sure to have one of those options at least
    if (!lowerCaseType && !upperCaseType && !NumericType && !specialCharsType) {
      window.alert("Not valid, choose at least one of the options available");
    } else {
      // Password must match all of the given criteria
      // password must be displayed in an alert or written to that page.
      const password = finalPassword(
        choosePasswordLength,
        lowerCaseType,
        upperCaseType,
        NumericType,
        specialCharsType
      );

      // return complete generated password
      return password;
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
