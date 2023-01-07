// Array of special characters to be included in password
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
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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
  'z'
];

// Array of uppercase characters to be included in password
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
  'Z'
];
var bigArray = [];
var bigArrayLength = 0;

let choiceSpecial = true;
let choiceNumeric = true;
let choiceLower = true;
let choiceUpper = true;
// Function to prompt user for password options
function getPasswordOptions() {
  choiceSpecial=confirm("Should I include Special Characters?");
  choiceNumeric=confirm("Should I include Numeric Characters?");
  choiceLower=confirm("Should I include Lower Cased Characters?");
  choiceUpper=confirm("Should I include Upper Cased Characters?");
  return choiceSpecial,choiceNumeric,choiceLower,choiceUpper
};
  
 
// Function for getting a random element from an array
function getRandom(arr) {
}

// Function to generate password with user input
function generatePassword(tempPassword,randomIndex)
 {
  
  for (let i = 0; i < PassLength; i++)
  {
      let randomIndex = Math.floor(Math.random()*bigArray.length);
      console.log(bigArray[randomIndex]);
      var tempPassword = tempPassword.concat(bigArray[randomIndex]);
    }
  return tempPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // console.log(specialCharacters);
  var tempPassword = "";
  var randomIndex = 0
  var password = generatePassword(tempPassword,randomIndex);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
// password length determination
function PassLengthInput(){
  PassLength = 1*prompt("Enter Length (10-64):");
 return PassLength
}
// body of the script-----
let PassLength = 0
while (PassLength < 10 || PassLength >64)
  {
    PassLengthInput(); 
    if (PassLength < 10 || PassLength >64) {
      alert("Please enter Number between 10 to 64")
    };
    console.log(PassLength);
  }
//getting password option  
do   
  {
    getPasswordOptions();
   // checking if at least one type was chosen
    if (!(choiceSpecial || choiceNumeric || choiceLower || choiceUpper)) {
      alert("Next time, please choose at least one character type for Password generation");
      } else {
        if (choiceSpecial) 
            { var bigArray = bigArray.concat(specialCharacters);
          };
        if (choiceNumeric) 
          { var bigArray = bigArray.concat(numericCharacters);
        };
        if (choiceLower) 
          { var bigArray = bigArray.concat(lowerCasedCharacters);
        };
        if (choiceUpper) 
          { var bigArray = bigArray.concat(upperCasedCharacters);
        };
        console.log(bigArray);
        bigArrayLength=bigArray.length;
        console.log(bigArrayLength);
      }
    
    }
while (!(choiceSpecial || choiceNumeric || choiceLower || choiceUpper));
    // console.log(PassLength);

writePassword()
      // allChoices = true;
      // } else {
      //   break;
 // console.log("choiceSpecial"+choiceSpecial);
    // console.log("choiceNumeric"+choiceNumeric);
    // console.log("choiceLower"+choiceLower);
    // console.log("choiceUpper"+choiceUpper);
    // let allChoices=!(choiceSpecial || choiceNumeric || choiceLower || choiceUpper);
    // console.log("all results "+allChoices);
// let Add event listener to generate button generateBtn.addEventListener('click', writePassword);

// let practicePassword = "";
//   for (let i = 0; i < 100; i++) {
    
//     practicePassword += "j"
    
//   }



//   return practicePassword;
// 5:59
// let randomIndex = Math.floor(Math.random()*arrayName.length)
// 5:59
// bigArray = bigArray.concat(exampleArray)
 // if 
  // console.log(a)
  //   {
  // // PassLength = 1*prompt("Enter Length (10-64):");
  // options.specialCharacters = confirm("Should I include Special Characters?");
  // options.numericCharacters = confirm("Should I include Numeric Characters?");
  // options.lowerCasedCharacters = confirm("Should I include Lower Cased Characters?");
  // options.upperCasedCharacters = confirm("Should I include Upper Cased Characters?");
  // }
  // console.log(prompt("Should I include Special Characters?"));
  // options.numericCharacters = prompt("Should I include numeric Characters?");
//   return 
// }
