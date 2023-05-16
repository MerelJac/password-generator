// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var writePassword = function () {
    var uppercasePrompt = window.confirm("Include uppercase letters?");
    if (!uppercasePrompt) {console.log(false)};
    var lowercasePrompt = window.confirm("Include lowercase letters?");
    if (!lowercasePrompt) {console.log(false)};
    var symbolPrompt = window.confirm("Include symbols?");
    if (!symbolPrompt) {console.log(false)};
    var lengthPrompt = window.prompt("Length of password. Please keep between 8 and 128 characters.");
    if (lengthPrompt > 128 || lengthPrompt < 8 ) {console.log(false)};

    

    
}

generateBtn.addEventListener("click", function() {console.log("Hi")});


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
