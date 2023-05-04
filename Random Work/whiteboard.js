// Question 8
var messageOne = "     Hello World my name is Lenny";
console.log(messageOne);
// to remove spaces in  the beginning of the string
console.log(messageOne.trim());

// Question 9 

function BooleanNum(num){     
    return num % 10 === 0 ? true : false; 
}; 
console.log(BooleanNum(50));
    // // here we enter a number inside the () 
    // connected with "booleanNum" to see if it is disvisble by 10 console.log(BooleanNum(50));

    // Question 10: 
    function getCount(str) {
        let vowelsCount = 0
        const vowels = ['a', 'e', 'i', 'o', 'u']
        for (let char of str) {
            if (vowels.includes(char)) {
             vowelsCount++
            }
            // we fall into this if statement if the currant character we're
                //  iterating over is a vowel
        }
        return vowelsCount
    }
// With this function and you console log getCount and then your message, it should tell you the vowel count.
    console.log(getCount("Hello my name is Lenny"));
    