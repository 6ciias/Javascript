// create a function that filters out negative numbers
var numbers = [-2,-4,10]; // Pick the numbers that you want to check here
console.log(numbers); // Original numbers will output here -2, -4, 10
numbers = numbers.filter(function(x){
return x > -1
});
console.log(numbers); // The negative numbers will be filtered out here.
