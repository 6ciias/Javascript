let months = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
input = 9
// We made a variable called months and then added arrays for all of the months. 

if (input >= 1 && input <= 12) {
  console.log(`The number ${input} is equal to the month of ${months[input]}.`);
} else {
  console.log("Invalid input. Please enter a number between 1 and 12.");
}

// we then created an input so the person has to pick a number between 1-12. each number corresponds to a certain month.
// if you pick a number thats not between 1-12 you will get invalid input via else in the console.log
// simply change what input = to and you will see the results of the month it corresponds to.