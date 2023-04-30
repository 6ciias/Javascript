let tomHeight = 9;
let tomMass =  8;

let jerryHeight = 10;
let jerryMass = 45; 

let tomBMI = (tomMass / (tomHeight * 2));
let jerryBMI = (jerryMass / (jerryHeight * 2));

if (tomBMI > jerryBMI) {
tomHigherBMI = true
} else { 
tomHigherBMI = false
}
console.log(`Does Tom have a higher BMI than Jerry?, ${tomHigherBMI}`)

// This one was fairly easy. I first create variables for their height + their mass
// I made their BMI a variable for each one and then provided the formula in the variable
// I made an if statement that if tomBMI is greater than jerrys than higherBMI = true
// else then = false
// console log is just a string and than i added the boolean at the end. 