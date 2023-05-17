// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// the random variables?

const uppercaseOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const symbolOptions = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const numberOptions = ["1","2","3","4","5","6","7","8","9","10"];
var possibleCharacter = [];

var writePassword = function () {
    // add prompts to output booleans
    var uppercasePrompt = window.confirm("Include uppercase letters?");
    console.log(uppercasePrompt);
    var lowercasePrompt = window.confirm("Include lowercase letters?");
    console.log(lowercasePrompt);
    var symbolPrompt = window.confirm("Include symbols?");
    console.log(symbolPrompt);
    var numbersPrompt = window.confirm("Include numbers?");
    var lengthPrompt = window.prompt("Length of password. Please keep between 8 and 128 characters.");
    if (lengthPrompt > 128 || lengthPrompt < 8 ) lengthPrompt == false; console.log(lengthPrompt);

    // push true variables to the empty string variables possibleCharacter
    // ... added the contents to the array instead of just combining the arrays to 4 total
    if (uppercasePrompt == true) {possibleCharacter.push(...uppercaseOptions)};
    if (lowercasePrompt == true) {possibleCharacter.push(...lowercaseOptions)};
    if (symbolPrompt == true) {possibleCharacter.push(...symbolOptions)};
    if (numbersPrompt == true) {possibleCharacter.push(...numberOptions)};
    // check that array pushed correctly
    console.log(possibleCharacter);
    console.log(possibleCharacter[34]);

    // how to compute randomized array
    var includeCharacters=[];
    for (var i = 0; i < lengthPrompt; i++) {
        let index = Math.floor(Math.random() * possibleCharacter.length);
        let newPassword = possibleCharacter[index];
        includeCharacters.push(newPassword);
    }

    console.log(includeCharacters);
    // combine randomized array without commas using .join() function
    var updatedPassword = includeCharacters.join("");
    console.log(updatedPassword);
    // window.alert("Your new password is: " + updatedPassword);
    // print password to HTML id password - don't use # for id
    document.getElementById("password").textContent = updatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);