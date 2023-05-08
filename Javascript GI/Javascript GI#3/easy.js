function exercise(activity) {
  return function() {
    return "Today's exercise: " + activity;
  }
}

var run = exercise('running');
console.log(run()); 

var swim = exercise('swimming');
console.log(swim()); 

// NOTES

// 1. created a function named excercise and then gave it a variable called exercise
// 2. used return so that it calls the function and then the variable
// 3. used return so that it calls out "Today's activiry + the variable activity"

// 4. we then created two variables called run and swim which output the activity in which they are doing
// 5. the console log then outputs today's exercise + activty from the variable you chose

