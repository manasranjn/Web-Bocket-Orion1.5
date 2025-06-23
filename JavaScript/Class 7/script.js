const newElem = document.createElement("h1")
newElem.innerText = "Hello Everyone"
// console.log(newElem);

const box = document.querySelector(".box")
// box.append(newElem)
// box.prepend(newElem)
// box.before(newElem)
// box.after(newElem)

const paragraph = document.getElementById("first")
// console.log(paragraph);
paragraph.innerText = "Hello"
// paragraph.after(newElem)

// paragraph.remove()

// const name = prompt("Enter your name")
// console.log(name);
// alert("Warning")

// const button = document.getElementById("myBtn")
// button.onclick = () => {
//     console.log("Button Clicked");
// }

function clickHere() {
    console.log("Button is Clicked");
}

const clickBtn = document.getElementById("btn")
clickBtn.onclick = () => {
    paragraph.style.fontSize = "50px"
    paragraph.style.color = "green"
}