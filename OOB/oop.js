// ----- Constructors and classes

class Pokemon {

constructor (name){
    this.name = name
    this.isSleepy = true
    this.isHungry = false
    }

    sayName(){
        console.log(`${this.name}`)
    }
    
    eatFood() {
if(this.isHungry){
    this.isHungry = false;
    this.isSleepy = true;
    console.log(`${this.name} finished eating, ${this.name} is sleepy`);
} else {

    console.log(`${this.name} isn't hungry. ${this.name} is sleepy though`);
   }
}
goSleep(){
if(this.isSleepy){
this.isSleepy = false;
this.isHungry = true;
console.log(`${this.name} went to sleep`)
console.log(`${this.name} woke up refreshed! And is hungry!!!`)
} else {
    console.log(
        `${this.name} isnt sleepy.... ${this.name} is SUPER HUNGRYYYYY`
    )
}
}
}

const pikachu = new Pokemon("Pikachu");

pikachu.sayName()

pikachu.eatFood()

pikachu.goSleep()