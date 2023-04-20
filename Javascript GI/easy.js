var nameOne = "Lenny";
var nameTwo = "Osiel is the Goat";
let lengthOne = nameOne.length;
let lengthTwo = nameTwo.length;

if (lengthOne > lengthTwo) {
    console.log(`The name ${nameOne} is longer than ${nameTwo} by ${lengthOne - lengthTwo} characters.`);
  } else if (lengthTwo > lengthOne) {
    console.log(`The name ${nameTwo} is longer than ${nameOne} by ${lengthTwo - lengthOne} characters.`);
  } else {
    console.log(`The names ${nameOne} and ${nameTwo} are of the same length.`);
  }

//   I made 2 variables one being nameOne and the other nameTwo
//   I used the let function to tell me the characters of each name 
//   I then used the if function to tell which one is greater and to give me a result based on that 

// If nameOne is longer than nameTwo it will output a string + the result of nameOne - nameTwo (assuming nameOne is longer)
// I did the else if also if nameTwo is greater and an option if they are the same length it will tell me that.I