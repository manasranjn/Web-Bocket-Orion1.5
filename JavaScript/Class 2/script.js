//? var
var a = 10
// console.log(a);

var a = 20
// console.log(a);

a = 30
// console.log(a);

//? let
let b = 10
// console.log(b);

// let b //error(not allowed)
b = 20
// console.log(b);

//? const
const c = "hi"
// console.log(c);

// const c = 10 //error(not allowed)
// c = 10 //error(not allowed)
// console.log(c);

//! Datatypes in JS
// console.log(typeof c);

//* Primitive 
//? number
let n = 10
// console.log(typeof n);

//? boolean
let x = true
// console.log(typeof x);

//? undefined
let u
// console.log(u);
// console.log(typeof u);

//? null
let n2 = null
// console.log(n2);
// console.log(typeof n2);

//? String
let s = "Hello"
// console.log(typeof s);

let s2 = "20"
// console.log(typeof s2);

//? Symbol
let symbolType = Symbol(10)
// console.log(symbolType);
// console.log(typeof symbolType);

//? BigInt
let big = BigInt(9999999999)
// console.log(big);
// console.log(typeof big);


//* Non-primitive
//? Array
let arr = [10, true, null, undefined, "Hello", [1, 2, 3, 4]]
// console.log(arr);
// console.log(arr[3]);

//? Object
let obj = {
    name: "ABCD",
    age: 20,
    mark: 9.5,
    address: {
        city: "BBSR",
        state: "Odisha"
    }
}
// console.log(obj);
// console.log(obj.age);
// console.log(obj['name']);
// console.log(obj.address.city);

// console.log(typeof arr);
// console.log(typeof obj);

//? function
function example() {
    console.log('This is a function');
    console.log("Example....");
}
// example()
// example()
// example()
// example()

//! Operator in JS