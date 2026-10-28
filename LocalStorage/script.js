

const todoList=document.querySelector('.todoList')
const listValue=document.querySelector('.todoValue')


let todoListValue =[];


const getTodoListfromLs =()=>{

    return JSON.parse(localStorage.getItem("todoYoutube")) || [];
}






const addTodoListLocalStorage = (todo) => {
    return localStorage.setItem("todoYoutube", JSON.stringify(todo));
}





const  addTodoList=(e)=>{
    e.preventDefault()
    todoListValue=getTodoListfromLs();
    let newTodo=listValue.value.trim();

  if(newTodo.length !=0){

      
         addTodoListLocalStorage(newTodo);
  }


    const liElement=document.createElement("li");
    liElement.innerHTML=newTodo;
    todoList.append(liElement);
 
}

const btn= document.querySelector('.btn')
btn.addEventListener("click",(e)=>{
    addTodoList(e)
})