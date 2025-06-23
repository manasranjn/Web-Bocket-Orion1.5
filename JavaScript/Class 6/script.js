const arr = [1, 2, 3, 4, 45, 5, 6, 7, 8]

let newArr = arr.forEach((element) => {
    return element
})
// console.log(newArr);

let newArray = arr.map((item) => {
    return item * 10
})
// console.log(newArray);

let evenArr = arr.map((item) => {
    return item % 2 === 0
})
// console.log(evenArr);

let even = arr.filter((item) => {
    return item % 2 === 0
})
// console.log(even);

let finalVal = arr.reduce((sum, item) => sum *= item, 1)
// console.log(finalVal);


//! DOM Manipulation

// console.log(window);
// console.log(document);

//* DOM Selection methods
//? getElementById()
let paragraph = document.getElementById("para")
// console.log(paragraph);

//? getElementsByClassName()
let paragraphEl = document.getElementsByClassName("paragraph")
// console.log(paragraphEl);

//? getElementsByTagName()
let tagEl = document.getElementsByTagName("h2")
// console.log(tagEl);

//? getElementsByName()
let nameEl = document.getElementsByName("email")
// console.log(nameEl);

//? querySelector()
let paraEle = document.querySelector(".paragraph")
// console.log(paraEle);

//? querySelectorAll()
let listItem = document.querySelectorAll(".paragraph")
// console.log(listItem);


//! Attribute Manipulation
const element = document.getElementById("para")
let idName = element.getAttribute("id")
console.log(idName);

element.setAttribute("id", "newName")
element.setAttribute("class", "className")
console.log(element);