// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// the random variables?
const uppercaseOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const symbolOptions = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const numberOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

var writePassword = function () {
    // add prompts to output booleans
    var uppercasePrompt = window.confirm("Include uppercase letters?");
    if (!uppercasePrompt) uppercasePrompt == false;
    console.log(uppercasePrompt);
    var lowercasePrompt = window.confirm("Include lowercase letters?");
    if (!lowercasePrompt) lowercasePrompt == false;
    console.log(lowercasePrompt);
    var symbolPrompt = window.confirm("Include symbols?");
    if (!symbolPrompt) symbolPrompt == false;
    console.log(symbolPrompt);
    var numbersPrompt = window.confirm("Include numbers?");
    if (!numbersPrompt) numbersPrompt == false;
    var lengthPrompt = window.prompt("Length of password. Please keep between 8 and 128 characters.");
    if (lengthPrompt > 128 || lengthPrompt < 8 ) lengthPrompt == false; console.log(lengthPrompt)

    
    // add randomization functions

    var allCaseTRUE = Math.floor(Math.random()) * lengthPrompt;
    console.log(allCaseTRUE);


    if (uppercasePrompt && lowercasePrompt == true) {
        console.log("yes");
        var result = (uppercaseOptions && lowercaseOptions)[Math.floor(Math.random() * lengthPrompt)];
        console.log(result);
    for (var i = 0; i <= lengthPrompt.length; i++) {
        Math.floor(Math.random())
        };

    };


 

    var combinedCases = getRandomCombination(uppercaseOptions, lowercaseOptions);
    console.log(combinedCases);

    var password = window.alert("Your new password is: ");
}



generateBtn.addEventListener("click", function() {console.log("Hi")});


// Write password to the #password input
function writePassword() {
    if (uppercasePrompt && lowercasePrompt == true) {
    };
    console.log("did it work?");

  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);