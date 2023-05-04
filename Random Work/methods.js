// // Methods 

// // Filter Method
// let numbers = [1,2,3,4,5,6]

// function filterEvenNumbers (numbers) {
//     return numbers.filterEvenNumbers(function(number)){
//     return number % 2 === 0;
//     });
// }

// // Map method
// let numbers2 = [1,2,3,4,5,6]
// function doubleNumbers (numbers){
// return numbers.map(function(number)){
// return number * 2
// });
// }

// // Sort Method 
// let unsortedNumbers = [4,2,8,1,5]

// function sortNumbers(numbers) {
//     return numbers.sort(function (a,b) {
//     return a - b; 
//     });
// }
// console.log(sortNumbers)

regular function 
var createGreeting = function (message, name) {
    return message + "," + name + "!";
};

var createGreating = (message, name) => message + ","