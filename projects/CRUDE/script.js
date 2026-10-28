
const createBtn= document.querySelector("#create")
const formDiv=document.querySelector(".form")
const closeBtn=document.querySelector("#close")
const form=document.querySelector("form")
const productDiv=document.querySelector(".products")


const productArr=JSON.parse(localStorage.getItem("product")) || []
let updateIndex=null;



let ui=()=>{
    productDiv.innerHTML=""
    productArr.forEach((elem,index)=>{
        productDiv.innerHTML+=`<div class="product_card">
            <div class="img">
                <img src="${elem.image}" alt="">
            </div>
            <div class="text">
                <h3>${elem.productName}</h3>
                <p>${elem.description}</p>
                <p>${elem.price}</p>
            </div>
            <div class="btn">
                <button onclick="updateProduct('${elem.productName}')" id="update">Update</button>
                <button onclick="deleteProduct('${index}')" id="delete">delete</button>
            </div>
        </div>
        `
    })

};

ui();


createBtn.addEventListener("click",()=>{
    formDiv.style.display="flex"
});

closeBtn.addEventListener("click",()=>{
    formDiv.style.display="none"
});

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let productName=event.target[0].value;
    let description=event.target[1].value;
    let price=event.target[2].value;
     let image=event.target[3].value;  

     if
     (
        productName.trim()===""||
         description.trim()===""|| 
         price.trim()===""||
         image===""){
      alert("fill all the fields")
      return
     }

     let obj={
        productName,
        description,
        price,
        image,
     }

     if(updateIndex!=null){
        productArr[updateIndex]=obj;
        updateIndex=null;
        localStorage.setItem("product",JSON.stringify(productArr));

     }else{

         productArr.push(obj)
         localStorage.setItem("product",JSON.stringify(productArr));
     }

     ui();
     console.log(productArr)

     form.reset()
     formDiv.style.display="none"

});

const updateProduct =(name)=>{
   let product=productArr.find((elem)=>elem.productName===name)
   updateIndex=productArr.findIndex((elem)=>elem.productName===name)

    formDiv.style.display="flex"
    form[0].value=product.productName
     form[1].value=product.description
      form[2].value=product.price
       form[3].value=product.image
    
};

const deleteProduct=(index)=>{
    productArr.splice(index,1)
    localStorage.setItem("product",JSON.stringify(productArr));
    ui();

}






// localStorage.setItem('name','gajadhar')
//  const lsd =localStorage.getItem("name");

//  let value=JSON.parse(lsd)


