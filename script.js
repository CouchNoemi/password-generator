// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];



function generatePassword() {
  var passwordLength = prompt("Choose a password length between 8 and 128");
  if (!passwordLength) return "No password";

  passwordLength = parseInt(passwordLength); 
  console.log( typeof passwordLength, passwordLength);
  if (!passwordLength){
    alert("please enter a valid number.")
    return generatePassword();
  }
  if(passwordLength < 8 || passwordLength > 128){
    alert("please enter a number between 8 and 128.")
    return generatePassword();
  }
  var allCharacters = [];
  var includeNumbers = confirm("Include numbers?");
  if (includeNumbers){
    allCharacters = allCharacters.concat(numericCharacters);
    allCharacters += numericCharacters;
    console.log(allCharacters);
  }

  //var allCharacters = [];
  var includeLowerCasedCharacters = confirm("Include Lower Case?");
  if (includeLowerCasedCharacters){
    allCharacters = allCharacters.concat(lowerCasedCharacters);
    allCharacters += lowerCasedCharacters;
    console.log(allCharacters);
  }
 
  //var allCharacters = [];
  var includeUpperCasedCharacters = confirm("Include Upper Case?");
  if (includeUpperCasedCharacters){
    allCharacters = allCharacters.concat(upperCasedCharacters);
    allCharacters += upperCasedCharacters;
    console.log(allCharacters);
  }

  //var allCharacters = [];
  var includeSpecialCharacters = confirm("Include Special Characters?");
  if (includeSpecialCharacters){
    allCharacters = allCharacters.concat(specialCharacters);
    allCharacters += specialCharacters;
    console.log(allCharacters);
  }

  for(var i=0; i < passwordLength; i++){
    var randChar = allCharacters[Math.floor(Math.random() * allCharacters.passwordLength)];
    password += randChar;
    
  }
  console.log(password);
  return password;
}


  


