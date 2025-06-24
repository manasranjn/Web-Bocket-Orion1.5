const button = document.getElementById("myBtn")
button.ondblclick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);

}

const input = document.getElementById("input")
input.onchange = (e) => {
    console.log(e.target.value);
}

// const submitButton = document.getElementById("submitBtn")
// function sayHello() {
//     console.log("Hello Everyone");
//     console.log("Good Morning");
// }

// submitButton.addEventListener("click", sayHello)

// setTimeout(() => {
//     submitButton.removeEventListener("click", sayHello)
//     console.log("Event listner removed");
// }, 3000)

let obj1 = {
    name: "ABCD",
    age: 20,
    mark: 90,
    address: "BBSR"
}
// console.log(obj1);

let obj2 = {
    __proto__: obj1,
    name: "XYZ",
    roll: 10
}
// console.log(obj1.name);
// console.log(obj2.age);
// console.log(obj2.name);
// console.log(obj2.roll);

let obj3 = Object.create(obj1)
// console.log(obj3.address);


class Example {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet(name, age) {
        console.log(`My name is ${this.name}, and age is ${this.age}`);
    }
}
let person1 = new Example("ABCD", 20)
// person1.greet()

class Parent {
    sayHello() {
        console.log("Hello everyone");
        console.log("Parent Class method");

    }
}
class Child extends Parent {
    helloChild() {
        console.log("Child class method");

    }
}

let child = new Child()
// child.sayHello()
// child.helloChild()


console.log("One");
console.log("Two");
console.log("Three");
setTimeout(() => {
    console.log("Four");
}, 3000)
console.log("Five");
console.log("Six");
