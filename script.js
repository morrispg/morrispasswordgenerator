// Assignment Code
var generateBtn = document.querySelector("#generate");

const button = document.querySelector("button")
button.addEventListener("click", function () {
  console.log
})
var characters = ""
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-="


//start writing code here
//What is the criteria for the contents of your password?
function passwordCriteria() {
  var passwordLength = parseInt(prompt("How many characters do you want your password to be?\nSelect a value between 8 and 128 characters"))

  if (passwordLength > 7 && passwordLength < 128) {

    console.log(passwordLength)

    includeUppercase = confirm("Include Uppercase Letters?");
    includeLowercase = confirm("Include Lowercase Letters?");
    includeNumeric = confirm("Include Numeric Characters");
    includeSpecialCharacters = confirm("Include Special Characters?");
    for (var i = 0; i < passwordLength; i++) {
      if (includeUppercase && characters.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * 26)

        characters = characters.concat(uppercase[randomIndex]);

        console.log(includeUppercase);
      }

      if (includeLowercase && characters.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * 26)

        characters = characters.concat(lowercase[randomIndex]);

        console.log(includeLowercase);
      }

      if (includeNumeric && characters.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * 10)

        characters = characters.concat(numbers[randomIndex]);

        console.log(includeNumeric)
      }

      if (includeSpecialCharacters && characters.length < passwordLength) {
        var randomIndex =
          characters = characters.concat(specialCharacters[randomIndex]);

        console.log(includeSpecialCharacters)
      }
    }
  } else {
    alert("invalid range between 7-128")
  }
  return characters
}
function generatePassword() {
  return passwordCriteria()
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//button.addEventlistener("click", function() {