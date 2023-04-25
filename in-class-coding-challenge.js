// create a function that filters out negative numbers
var numbers = [-2,-4,10];
console.log(numbers);
numbers = numbers.filter(function(x){
return x > -1
});
console.log(numbers);
