// var Person = {
// firstName: "Lenny"
// lastName: "Macias"

// console.log(fullName)
// } 


// Entry level scope;

var exposed = "This string is visible everywhere";

function firstfunction(message){

// inside of firstfunction, i can see both exposed and // message 

console.log(message + exposed);
}

firstfunction("Oh my!");
//console.log(message); // This can only be accessed in our function

function secondFunction(exposed) {
    // secondFunction *Should* be able to see the exposed
    // variable declared above, but we've "shadowed" it.
}

secondFunction("this isn't what I thought I wrote....");

function thirdFunction(message) {
    return message + exposed;
}
var message = thirdFunction("Oh my!");