//! for loop
for (let i = 0; i < 10; i++) {
    // console.log(i);
}

//! while loop
let i = 1
while (i <= 10) {
    // console.log(i);
    i++
}

//! do-while loop
let j = 0
do {
    // console.log(j);
    j++
} while (j <= 10)

//! for-of loop
let arr = [10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70]

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

for (let element of arr) {
    // console.log(element);
}

let str = "hello everyone"
for (let s of str) {
    // console.log(s);
}

//! for-in loop
let obj = {
    name: "Amit",
    age: 20,
    course: "MERN",
    address: "Bhubaneswar"
}
for (let key in obj) {
    // console.log(key);
    // console.log(obj[key]);
}


//* Array Inbuild methods
let marks = [90, 80, 85, 92, 88, 94, 95]
console.log(marks);

//! push()
// marks.push(90, 60, 70)
// console.log(marks);

//! pop()
// marks.pop()
// console.log(marks);

//! unshift()
// marks.unshift("Hello")
// console.log(marks);

//! shift()
// marks.shift()
// console.log(marks);

//! splice()
// marks.splice(2, 2) //delete
// console.log(marks);

// marks.splice(2, 2, "Hi", true) //replace
// console.log(marks);

// marks.splice(4, 0, undefined, false)
// console.log(marks);

//! slice()
let subArr = marks.slice(1, 6)
// console.log(subArr);

//! reverse()
// marks.reverse()
// console.log(marks);
// console.log(marks.reverse());

//! includes()
// console.log(marks.includes(10));
// console.log(marks.includes(90));

//! toString()
console.log(marks.toString());
