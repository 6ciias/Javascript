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
