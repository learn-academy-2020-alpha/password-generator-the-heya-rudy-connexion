// Assignment Code
var generateBtn = document.querySelector("#generate");


//Prompting the user to give the CHARACTER COUNT
var askedCount = prompt("How many characters do you want in your password?");


//Prompting the user to choose whether they want UPPER (bool)
var yesUpper = confirm("Do you want uppercase letters in your password?")

//Prompting the user to choose whetherthey want LOWER (bool)
var yesLower = confirm("Do you want lowercase letters in your password?")

//make prompts pop up when user clicks Generate Password button

//***************************************************************

//Determine the global variable for length (later to put in the final function)

let functionCount = (num) => {
  if (num >= 8 && num <=128 ) {
    return confirmedCount = num
  } else {
    alert("Thats not a number between 8 and 128.")
  }
}

//Calling the function to validate characterCount
functionCount(askedCount)

//***************************************************************


//****************************************************************
//******************************** GENERATING
//****************************************************************

//To generate UPPER case password, use this function:
function generatePasswordUpper(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   console.log(result)
   return result;
}



//To generate LOWER case password, use this function:
function generatePasswordLower(length) {
   var result           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   console.log(result)
   return result;
}

//To generate Upper AND Lower case password, use this function:
function generatePasswordMixed(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   console.log(result)
   return result;
}


//Function to generate the password according to one out of three options: only upper OR only lower OR mixed case.

generatePassword = (length, bool1, bool2) => {
  if (bool1 === true && bool2 === true) {
    return generatePasswordMixed(length);
  } else if (bool1 === true && bool2 === false) {
    return generatePasswordUpper(length);
  } else if (bool1 === false && bool2 === true) {
    return generatePasswordLower(length);
  }
}

//Test the function Generate Password
// generatePassword(confirmedCount, yesUpper, yesLower)

// Write password to the #password input
function writePassword() {
  var password = generatePassword(confirmedCount, yesUpper, yesLower);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
