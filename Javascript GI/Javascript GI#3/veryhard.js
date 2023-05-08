class Person {
constructor () {
    this.name = 'Pedro';
    this.job = 'Construction Worker';
    this.age = '25'
}
exercise() {
    console.log('I hate going to the gym');
  }
  fetchJob() {
    console.log('Pedro is a Construction Worker for LM construction');
  }
}

// create a new instance of the Person class
let pedro = new Person();

// call the exercise method on the pedro object
pedro.exercise(); // output: "I hate going to the gym"

// call the job method we on the pedro object
pedro.fetchJob(); // output "Pedro is a Construction Worker for LM construction"

// Person 2 Programmer

class Person2 {
    constructor() {
      this.name = 'Julargarose';
      this.job = 'Exotic Dancer & Programmer';
      this.age = '63';
      this.languages = ['Javascript', 'C+', 'HTML/CSS', 'React'];
      this.isBusy = true;
    }
  
    completeTask() {
      if (this.isBusy === false) {
        console.log('Julargarose is not busy');
      }
    }
  
    acceptNewTask() {
      if (this.isBusy === true) {
        console.log('Julargarose is now busy again');
      }
    }
  
    offerNewTask() {
      if (this.isBusy === true) {
        console.log("Julargarose isn't accepting new tasks right now..");
      } else {
        console.log('Julargarose would love to help with a new task');
      }
    }

    learnNewLanguage() {
        this.languages.push('Python', 'Script');
      }
    
      listLanguages() {
        console.log(this.languages, this.learnNewLanguage());
      }
  }
  
  // create a new instance of the Person class with different properties
  let julargarose = new Person2();

  julargarose.completeTask();

  julargarose.acceptNewTask();

  julargarose.offerNewTask();

  julargarose.learnNewLanguage();

  julargarose.listLanguages();

//   Created a new person with the same properties and only added more
// Added new methods and called for them down below. 
// Fairly simple