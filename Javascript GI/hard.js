function calc() {
    var n1 = 10; // Change this value to the first number you want to use
    var n2 = 5; // Change this value to the second number you want to use
    var oper = "*"; // Change this value to the operator you want to use (+, -, /, *)
  
    var result;
  
    if (oper === "+") {
      result = n1 + n2;
    } else if (oper === "-") {
      result = n1 - n2;
    } else if (oper === "/") {
      result = n1 / n2;
    } else if (oper === "*") {
      result = n1 * n2;
    } 
    console.log(`The result of ${n1} ${oper} ${n2} is ${result}.`);
  }
  
  calc();


// In this function I created 4 variables of which 2 are numbers, the 3rd is the operation variable,
// and the 4th is the result variable. I then used else if function to make 4 different results depending on the operation 
//chosen in the function. The console log then outputs a string that says the result of *variable 1 
// then (operation variable) variable 2 is (result variable.)
