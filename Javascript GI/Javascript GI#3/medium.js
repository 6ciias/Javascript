function cutPizzaSlices(Slices){
    return function(people) {
    const slicesEach = (Slices / people);
    return `Each person gets ${slicesEach} of Pizza!`
}
}
const sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); // prints "Each person gets 2.67 slices of pizza"

// NOTES:
// 1. Create a function called cutPizzaSlices and then a parameter of (slices)
// 2. then we used return to create a new function called people
// 3. we then created a const variable that gets how many slices each person gets by diving the 2 parameters above.
// 4. Created a string that prints out each person gets *slices each const* of pizza*

// 5. created a new function so we can set the total number of slices within the existing function
// 6. we then console log out sharePizza variable and then add the number of slices you want to divide it by.
// 7. it will output the first function