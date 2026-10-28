
// event propagation

// const btn=document.querySelector("button")
// const div= document.querySelector("div")
// const main =document.querySelector("main")
// const body=document.querySelector("body")
// btn.addEventListener("click",(e)=>{
//     console.log("button trigger")
// },true)
// div.addEventListener("click",(e)=>{
//     console.log("div trigger")
// },true)

// main.addEventListener("click",(e)=>{
//     console.log("main trigger")
// },true)
// body.addEventListener("click",(e)=>{
//     console.log("body trigger")
// },true)


// submit event

const form=document.querySelector("form");
const inp1=document.querySelector("#name")
const inp2=document.querySelector("#email")
form.addEventListener("submit",(events)=>{
    events.preventDefault();
    // console.log(events.target[0].value)
    // console.log(events.target[1].value)
      let name= inp1.value;
      let email=inp2.value;
      console.log(name,email)
      form.reset()

});