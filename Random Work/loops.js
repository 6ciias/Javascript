// // array of zoo animals

// var zooAnimals = ["Wolf", "Owl", "Elephant", "Lion"]

// // loop that goes through the array to print out each animal.

// for (var i = 0; i < zooAnimals.length; i++){
// console.log(zooAnimals[i])
// }


// //===========================================================

// // loop 0 to 4

// for (var i = 0; i <=4; i++){

// console.log(i);
// }

// // This is our starting myFarm array

// var myFarm = ["Cow", "Horse", "Chicken", "Pig"];
// var arraylength = myFarm.length; 

// for (var j = 0; j < arraylength; j++)
// // console out the farm animal in the current index

// console.log(myFarm[1]);
let movieActors = [
{ name:"Tom", age: 16 },
{ name:"Ashley", age: 31 },
{ name:"Sarah", age: 18 },
{ name:"Alvin", age: 22 },
{ name:"Osiel", age: 22 },
{ name:"Malcolm", age: 15 },
];

function canWatchRMovies (array){
 for (var i = 0; i < array.length; i++){

if (array)[i].age >=17;
console.log(array[i].name, "can watch R rated movies");
} else {
    console.log(array[i].name, "can NOT watch R rated movies")
}
canWatchRMovies(movieActors);