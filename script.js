// Assignment Code
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '*', '~', '-'];

// create empty arrays to push users input 
var possibleChar = [];
var generateBtn = document.querySelector("#generate");

function generatePassword(){ 
  var length = parseInt(prompt("What is your password length?")); 
  if (isNaN(length)) {
    alert ("Answer must be a numerical number between 8 and 128");
    return null;
  }

  // if password is less than 8 characters return error
  // if password is more than 128 characters return error
  // if password is between 8-128 characters return password
  
  if (length<8 || length>128) {
    alert ("Password must be between 8 and 128 characters long")
    return null;  
  }

  // save all confirms in a  variable
   var getLower = confirm("Do you want lower case?")
   var getUpper = confirm("Do you want upper case?")
   var getNumber = confirm("Do you want your password to contain numbers?")
   var getSpecial = confirm("Do you want your password to contain special characters?")

   if (getLower){
    possibleChar = possibleChar.concat(lowerCase)
   }
   if (getUpper){
    possibleChar = possibleChar.concat(upperCase)
   }
   if (getNumber){
    possibleChar = possibleChar.concat(numbers)
   }
   if (getSpecial){
    possibleChar = possibleChar.concat(specialCharacters)
   }

  var passwordArray = []
  for(var i = 0; i<length; i++){
    var passwordChar = getRand(possibleChar)
    passwordArray.push(passwordChar)
  }

  return passwordArray.join("")
}


// get's random character of any  giving array
function getRand(arr) {
  var randomizer = Math.floor(Math.random() * arr.length);
  var randChar = arr[randomizer];
  return randChar;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



