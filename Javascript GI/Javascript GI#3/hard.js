const createPII = function(name, ssn) {
    const data = { name: name, ssn: ssn };
  
    const getName = function() {
      return data.name;
    };
  
    return { getName: getName };
  };

  const pii = createPII('Lenny Macias', '123-45-6789');

  console.log(pii.getName()); // prints "Bob Smith"
  console.log(pii.ssn); // prints undefined


// NOTES
// we created a const called CreatePII where we set up our function
// We then created a const where we created our data information
// Created const getName which calls on our first function
// however we return it so that it only returns the data.name
// We then created a const called Pii that called on the functino CreatePii and gives values for the function
// we then just console log the pii.getName()) and it should get the name from the dataset
// ssn will be undefined because of the closure, we didn't call for it earlier in the function to protect it.