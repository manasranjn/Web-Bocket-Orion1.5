//?Logical operator Logical AND (&&), Logical OR (||), Logical NOT (!)
// console.log("Logical operator");

let first = true
let second = false
let third = true

// console.log(first && second); //false
// console.log(first && third); //true
// console.log(first || second); //true
// console.log(first || third); //true
// console.log(!first); //false
// console.log(!second); //true

//?Unary operator
let val = 10

// console.log("Pre increment=", ++val);
// console.log("Post increment=", val++);
// console.log(val);
// console.log(--val); // 11
// val++
// val--
// ++val
// console.log(val++);
// console.log(val);
// console.log("Pre Decrement= ", --val);
// console.log("Post Decrement= ", val++);
// console.log(val);


//! Conditional/Decision Making Statements
//? simple if
let age = 19
// if (age >= 18) {
//     console.log("You can vote");
// }

//? if..else
// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You can't vote");
// }

//? else..if
let time = 19
// if (time < 12) {
//     console.log("Good morning");
// } else if (time >= 12 && time <= 16) {
//     console.log("Good afternoon");
// } else if (time >= 17 && time <= 24) {
//     console.log("Good evening");
// } else {
//     console.log("Invalid time");
// }

//? switch case
let value = 1
switch (value) {
    case 1:
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2");
        break;
    case 3:
        console.log("Case 3");
        break;
    case 4:
        console.log("Hello");
        break;
    default:
        console.log("Default case");
}