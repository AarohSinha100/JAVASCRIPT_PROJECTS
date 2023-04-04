const taskarea = document.querySelector(".tasks");
const input_task = document.querySelector(".inputfield");
const add_task = document.querySelector(".addBtn");
const modal = document.querySelector(".modal");
const modal_button = document.querySelector(".modal_button");

const check = () => {
    if(input_task.value!=""){
        return true;
    }
    else{
        return false;
    }
}

let count = 0;

const createTasks = ()=>{
    const taskdiv = document.createElement("div");
    const text = document.createTextNode(`${input_task.value}`);
    const taskcompleted = document.createElement("button");
    const deletetask = document.createElement("button");
    const buttondiv = document.createElement("div");
    buttondiv.appendChild(taskcompleted);
    buttondiv.appendChild(deletetask);


    //APPENDING TO MAIN 
    taskdiv.appendChild(text);
    taskdiv.appendChild(buttondiv)
    taskdiv.style.display = "flex";
    taskdiv.style.flexDirection = "row";
    taskdiv.style.alignItems = "center";
    taskdiv.style.justifyContent = "space-between";




    taskarea.appendChild(taskdiv);
    
    //STYLING THE DIV
    taskdiv.style.backgroundColor = "white";
    taskdiv.style.border = "2px solid #428df5";
    //taskdiv.style.padding = "5px";
    taskdiv.style.boxShadow = "3px 3px 0px 0px #428df5";

    //STYLING THE BUTTON
    taskcompleted.innerHTML = "DONE";
    taskcompleted.style.fontSize = "10px"
    taskcompleted.style.backgroundColor = "#428df5";
    taskcompleted.style.color = "white";
    taskcompleted.style.border="none";
    taskcompleted.style.height = "30px";
    

    deletetask.innerHTML = "DELETE";
    deletetask.style.fontSize = "10px"
    deletetask.style.backgroundColor = "#428df5";
    deletetask.style.color = "white";
    deletetask.style.border="none";
    deletetask.style.height = "30px";

   taskcompleted.onclick = function(){
            taskdiv.style.backgroundColor = "#428df5";
            taskdiv.style.color = "white";
            taskdiv.style.textDecoration = "line-through";
            taskcompleted.style.backgroundColor="white";
            taskcompleted.style.color="#428df5";
            deletetask.style.backgroundColor="white";
            deletetask.style.color="#428df5";
   }

   deletetask.onclick = function(){
        taskarea.removeChild(taskdiv);
        count-=1;
   }

    
}



const afterclicked = () => {
    input_task.value = "";
}

const addTodo = () => { 
    if(count<=5){
    createTasks();
    afterclicked();
    count+=1;
    }else{
        input_task.value = "";
        modal.classList.add("open-modal");
    }
}

modal_button.onclick = function(){
    modal.classList.remove("open-modal");
}

add_task.addEventListener('click',addTodo);
console.log(count);