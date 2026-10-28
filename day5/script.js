
// const main= document.querySelector("main")
 
// main.addEventListener("click",(e)=>{
//     console.log(e.target)
// })


const main= document.querySelector("main")
// const box= document.querySelector(".box")
const btn=document.querySelector("button")
const timer=document.querySelector("#timer")
const box=document.createElement("div")
const overlay=document.querySelector(".overlay")
const scoree=document.querySelector("#score")

box.classList.add("box")


let interval;
 let time=0;
 let score=0;

const randomColor=()=>{
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
};




const randomBox=()=>{
    box.style.backgroundColor=randomColor();
    main.append(box);
   

     
     const mainH=main.clientHeight-box.offsetHeight;
     const mainW=main.clientWidth-box.offsetWidth;
     const ry=Math.random()*mainH;
     const rx=Math.random()*mainW;
    box.style.top = `${ry}px`
      box.style.left = `${rx}px`
     
}




btn.addEventListener("click",()=>{
    // const ry=Math.random()*100;
    // const rx=Math.random()*100;
    // box.style.top = `${ry}%`
    //   box.style.left = `${rx}%`

  interval=setInterval(()=>{
    randomBox()
    time+=1;
    timer.textContent=time
  },1000)

      setTimeout(()=>{
        overlay.style.display="flex"
        clearInterval(interval);
      },10000)
    
});

box.addEventListener("click",()=>{
  score+=1;
    scoree.textContent=score
})