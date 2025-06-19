let age = 20
let name = "Ashish"

// console.log("Hello, my name is ", name, " and my age is ", age);

let val = `hello`
// console.log(`Hello, my  name is ${name} and my age is ${age}`);

// console.log("Hello \n everyone");
// console.log("Hello \t everyone");


//! String inbuilt methods
let str = "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus non inventore fuga laudantium minus! Consequatur mollitia sunt possimus est sed eligendi aspernatur iusto maxime ipsum tempore? Nisi ipsam beatae ipsum magni dicta!  "
// console.log(str);

//? toUpperCase()
let uppercase = str.toUpperCase()
// console.log(uppercase);

//? toLowerCase()
let lowercase = str.toLowerCase()
// console.log(lowercase);

//? trim()
let trimmedStr = str.trim()
// console.log(trimmedStr);

//? indexOf()
let idx = str.indexOf("ipsum")
// console.log(idx);

//? lastIndexOf()
let lastIndex = str.lastIndexOf("ipsum")
// console.log(lastIndex);

//? charAt()
let char = str.charAt(10)
// console.log(char);

//? replace()
let newStr = str.replace("ipsum", "Hello")
// console.log(newStr);

//? replaceAll()
let replacedStr = str.replaceAll("ipsum", "hi")
// console.log(replacedStr);

//? slice()
let subStr = str.slice(10, 50)
// console.log(subStr);

//? split()
let split = str.split(" ")
// console.log(split);

//? length
// console.log(str.length);


//! Function
//* User-defined Function
//? Normal Function
function greet() {
    console.log("Hello");
}
// greet()

function greetEveryone(str) {
    console.log(str);
}
// greetEveryone("Hello everyone")
// greetEveryone("Good morning everyone")

//? Arrow function
const sum = (a, b) => {
    console.log(a + b);
}
// sum(10, 20)

const details = (name, age, course, college) => {
    console.log(`My name is ${name}, age is ${age}, my course is ${course}, and my college name is ${college}`);
}
// details("Dandapani", 8, "BCA", "Womens College")

//? Anonymous function
const multiply = function (a, b) {
    return a * b

}
let val1 = multiply(10, 100)
// console.log(val1);


//? Callback function
// () => {

// }

//? forEach loop
let arr = [10, 20, 30, 4, 50, 6, 60]
let newArr = arr.forEach((element) => {
    console.log(element);
    return element * 2
})
console.log(newArr);
