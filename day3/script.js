
console.log("hello")
// attributies and properties
// -setAttribute getAttribute, removeAttribute, hasAttribute
// with data  name
// input.value(properties current state) vs input.getAttribute("value"

// const h1 =document.querySelector("#id1")
// let res=h1.getAttribute("class")
// h1.setAttribute("width","200")

// h1.removeAttribute("class")
// const userCard=document.querySelector("#user-card");
// console.log(userCard.getAttribute("data-user-id"))

// userCard.dataset.userId="245"
// console.log(userCard.getAttribute("data-user-id"));





// input.value(properties current state) vs input.getAttribute("value"

// const inp=document.querySelector("input")
// const btn=document.querySelector("button")

// btn.addEventListener("click",()=>{
//     console.log(inp.value)
// });


// creating inserting and removing element from dom

// createElement

// insertion------
// appendChild - old
// append  - new

 const main=document.querySelector("main")
let footer=document.createElement("footer");
// console.log(footer);
// document.body.appendChild(footer)
main.appendChild(footer)

// main.removeChild(footer)




