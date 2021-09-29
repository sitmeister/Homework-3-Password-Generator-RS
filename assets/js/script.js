// Assignment Code (do not touch)
var generateBtn = document.querySelector("#generate");

//create prompts for criteria 
  //(legth of password (>=8 characters to <=128))
  //lower case
  //uppercase
  //numeric
  //special characters
//input prompt needs to be validated and character type needs to be processed
//after prompt - generate password into an alert or on the page
  //need to concatenate the arrays that are true
    //link truth to the arrays
  //need to randomize the array
  //output the password length from the combined array

// Add event listener to generate button (do not touch)
generateBtn.addEventListener("click", writePassword);



//variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numeric = "1234567890".split("");
var specialCharacters = "`~!@#$%^&*()-=_+[]<>,.?/".split("");
console.log(specialCharacters, lowerCase, upperCase, numeric);
var lowerCasePrompt = false;
var upperCasePrompt = false;
var numberPrompt = false;
var sCPrompt = false;
var genPassword = [];

function generatePassword() {
    passLength = window.prompt("How many characters do want your password to have? (pick 8-128)");
    console.log(passLength);  
      if (Number.isInteger &&  passLength >= 8 && passLength <= 128) {
        lowerCaseFn();
      } else {
        window.alert("The number must be 8 or more and 128 or less.");
        generatePassword();
      }
      function lowerCaseFn() {
        lowerCasePrompt = window.prompt("Do you want lower case letters in your password: y/n");
        if (lowerCasePrompt === "y") {
          lowerCasePrompt = true;
          console.log(lowerCasePrompt);
          upperCaseFn();
        } else if (lowerCasePrompt != "y" && lowerCasePrompt != "n") {
          window.alert("Please type y or n for yes or no.");
          lowerCaseFn();
        } else if(lowerCasePrompt === "n") {
          lowerCasePrompt = false;
          console.log(lowerCasePrompt);
          upperCaseFn();
        }
      }
      function upperCaseFn() {
        upperCasePrompt = window.prompt("Do you want upper case letters in your password: y/n");
        if (upperCasePrompt === "y") {
          upperCasePrompt = true;
          console.log(upperCasePrompt);
          numberFn();
        } else if (upperCasePrompt != "y" && upperCasePrompt != "n") {
          window.alert("Please type y or n for yes or no.");
          upperCaseFn();
        } else if(upperCasePrompt === "n") {
          upperCasePrompt = false;
          console.log(upperCasePrompt);
          numberFn();
        }
      }
      function numberFn () {
        numberPrompt = window.prompt("Do you want numbers in your password: y/n");
        if (numberPrompt === "y") {
          numberPrompt = true;
          console.log(numberPrompt);
          sCFn();
        } else if (numberPrompt != "y" && numberPrompt != "n") {
          window.alert("Please type y or n for yes or no.");
          numberFn();
        } else if(numberPrompt === "n") {
          numberPrompt = false;
          console.log(numberPrompt);
          sCFn();
        }
      }
      function sCFn() {
        sCPrompt = window.prompt("Do you want special characters in your password: y/n");
        if (sCPrompt === "y") {
          sCPrompt = true;
          console.log(sCPrompt);
          generateFn();
        } else if (sCPrompt != "y" && sCPrompt != "n") {
          window.alert("Please type y or n for yes or no.");
          sCFn();
        } else if(sCPrompt === "n") {
          sCPrompt = false;
          console.log(sCPrompt);
          generateFn();
        }
      }

      function generateFn() {
        if (lowerCasePrompt === true) {
          genPassword = genPassword.concat(lowerCase);
        }
        if (upperCasePrompt === true) {
          genPassword = genPassword.concat(upperCase);
        }
        if (numberPrompt === true) {
          genPassword = genPassword.concat(numeric);
        }
        if (sCPrompt === true) {
          genPassword = genPassword.concat(specialCharacters);
        }console.log(genPassword);
      }
      //added length to the password
      for (var i = 0; i < passLength; i++){
        genPassword.push(genPassword[Math.floor(Math.random() * genPassword.length)]);
      }
      //Durstenfeld shuffle algorithm to shuffle an array
      function shuffle(genPassword) {
        for (let i = genPassword.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [genPassword[i], genPassword[j]] = [genPassword[j], genPassword[i]];
        }
      }
      
      const shuffledArr = shuffle(genPassword);
      console.log(genPassword);
      
      genPassword.length = passLength;
      console.log(genPassword);

      password = genPassword;
      password = password.join("");
      console.log(password);
      return password;
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
