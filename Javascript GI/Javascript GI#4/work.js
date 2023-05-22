// easy
function averageNum(array) { 
    let total = 0; // here we make a variable for the total of all the numbers added up. 
  
    for (let i = 0; i < array.length; i++) { // this for loop sets up so that all the numbers can be added
      total += array[i]; // total = all of the numbers in the array added up 
    }
  
    let average = total / array.length; // here we creete a new variable called average that takes the total vs the amount of numbers in the string
    return average; // it returns the average.
  }
  
  console.log(averageNum([1, 2, 3]));

  // Medium 

  function search(nums, target) {
    return nums.indexOf(target);
  }
  
  let nums = [4, 5, 6, 7, 0, 1, 2];
  let target = 0;
  
  let result = search(nums, target);
  console.log(result);  // Output: 4

  // we created a function called search that takes numbers and a target
  // indexof is a code that searches for a special number or in this case a target.
  // once it finds it, it will return it.
  // the result is after we the function itself doing everything after inputting the numbers and target
  
  // Hard
  // SEE OTHER PAGE


  // Very Hard

  function totalPossAmount(array) {
    let total = 0;
    for (let i=0; i < array.length; i++) {
        total = total + array[i]; 
    }
    let amount = array[i] + array[i];
    return amount; 
  }

//   I wasn't able to solve this problem correctly. I did what I could, but  I didn't understand how to solve this method without any help.