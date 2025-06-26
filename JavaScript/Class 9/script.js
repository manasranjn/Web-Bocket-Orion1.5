// () => {
//     () => {
//         () => {
//             () => {
//                 () => {
//                     () => {
//                         () => {

//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(a);


function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        console.log("User posts fetched");
        callback([{ postId: 1, title: "Post 1" }, { postId: 2, title: "Post 2" }]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        console.log("Comments for post fetched");
        callback([{ commentId: 101, text: "Nice post!" }]);
    }, 1000);
}

// Nested Callbacks (Callback Hell)
// getUser(1, (user) => {
//     getUserPosts(user.id, (posts) => {
//         getPostComments(posts[0].postId, (comments) => {
//             console.log("Comments: ", comments);
//         });
//     });
// });

// console.log("1");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log(response);
        response.json()
            .then((result) => {
                console.log(result);
            })
            .catch((failed) => {
                console.log(failed);
            })
    })
    .catch((reject) => {
        console.log(reject);
    })

// console.log("2");
// getData()
const getData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(response);
    let data = await response.json()
    console.log(data);
}
// getData()
// console.log("3");
a = 20
// console.log(a);
// console.log(b);


//! Hoisting
//? variable Hoisting
var a = 10
// console.log(a);

let b = 20

// check()
//? function Hoisting
function check() {
    console.log("Check");

}
// check()

//! Operations in Object
let obj = {
    name: "ABCD",
    age: 20,
    address: "BBSR"
}
//? Add a new Key
obj.mark = 20
// console.log(obj);

//? Edit a key value
obj.name = "PQRS"
// console.log(obj);

//? Delete a key
delete obj.age
// console.log(obj);

//! sort() method 
let arr = [10, 60, 20, 80, 30, 50, 10]
console.log(arr.sort());

console.log(arr.sort((a, b) => b - a));

let name = ["a", "c", "b", "hello"]
console.log(name.sort());
console.log(name.sort((a, b) => b - a));
