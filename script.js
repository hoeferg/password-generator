// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerAlph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperAlph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const special = ['!','@','#','$','%','^','&','*'] 
const num = ['0','1','2','3','4','5','6','7','8','9']
const criteria = [lowerAlph, upperAlph, special, num]

function generatePassword () {
  length - prompt ('How many characters will your password be?')
  if (length<8 || length>128)(
    alert ('number of characters must be between 8 and 128')
    generatePassword()
}else{ 
lowercase = confirm('Would you like to include lowercase?')
uppercase = confirm('Would you like to include uppercase?')
numeric = confirm('Would you like to include numeric values?')
specialChar = confirm('Would you like to include special character?')
}

let criteriaSelect = [lowercase, uppercase, numeric, specialChar];
let newCriteria = [];

for (1=0; i < criteria.length; 1++);
  if (criteriaSelect[i]){
    newCriteria= newCriteria.concat(criteri[1]);
  }
}

console.log(newCriteria);

passw = ""
for (i = 0; i < length; i++) {
   newChar = newCriteria(Math.floor(Math.random()))
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
