function findMax(ar)

{
    var max = ar[0];

    for(var i = 0; i < ar.length; i++)
    {
        if (ar[i] > max)
        {
            max = ar[i];
        }
    }

    return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

// We created a function named findMax that uses the parameters (ar)
// We then made a variable named var max which is linked to the array/ 
// The tricky part comes when we make the for loop which iterates over 
// each element in the array. 
// the if line checks if the current element is greater than the maxium number. 
// the computer basically goes over each array and updates which is the biggest number
// and processses it as a truth if it's the maximum numeber. 

// we then have the list of arrays at the bottom 
// we then use the variable called varmax and = to the function we made above. 

// Lastly we just console.log to output a string named "Max" and the 
// max to show the result. 