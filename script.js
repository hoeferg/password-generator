// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const special = ['!','@','#','$','%','^','&','*'] ;
const num = ['0','1','2','3','4','5','6','7','8','9'];
const criteria = [lowerAlpha, upperAlpha, special, num];

function generatePassword () {
  length = prompt ('How many characters will your password be?')
  if (length < 8 || length > 128){
    alert ('number of characters must be between 8 and 128')
    generatePassword()
} else { 
lowercase = confirm('Would you like to include lowercase?')
uppercase = confirm('Would you like to include uppercase?')
numeric = confirm('Would you like to include numeric values?')
specialChar = confirm('Would you like to include special character?')
}

let criteriaSelect = [lowercase, uppercase, numeric, specialChar];
let newCriteria = [];

for (i=0; i < criteriaSelect.length; i++) {
  if (criteriaSelect[i]){
    newCriteria= newCriteria.concat(criteria[i]);
  }
}

console.log(newCriteria);

passW = ""
for (i = 0; i < length; i++) {
   newChar = newCriteria[Math.floor(Math.random() * newCriteria.length)];
   passW = passW.concat(newChar);
  }
  return passW;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
