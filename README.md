Program starts with establishing how many characters will be used for password. Password length checked if it's between 10 to 64(Function PassLengthInput()).
After correct number is entered, program establishes which type of the characters are used(Function getPasswordOptions()).
Program only continues if at least one type of the characters is selected for password. Password sample is only combines the characters selected(Do-WHILE loop used). 
This method provide whole sample, but original group of characters are in predictable order. Even though password are created by using randomize process, to increase security option newly created sample is randomized and rearranged, prior to peeking password character(Function rearrangeSample()).




// Function to generate password with user input

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input

// password length determination

//getting password option  
do   
  {
    getPasswordOptions();
   // checking if at least one type was chosen
    if (!(choiceSpecial || choiceNumeric || choiceLower || choiceUpper)) {
      alert("Next time, please choose at least one character type for Password generation");
     
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

