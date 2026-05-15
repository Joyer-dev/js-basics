 function updateTodolist(){

    let todoListHtml='';
    todoList.forEach((todoObject,index)=>{
    
        const {name,dueDate}=todoObject;
        const html=`
       <div> ${name}</div>
      <div> ${dueDate}</div>
        <button onclick="
        todoList.splice(${index},1);
        updateTodolist();
        "class="del">delete</button>
        `
        todoListHtml+=html;
    
    })
    console.log(todoListHtml);
    inputElement=document.querySelector('.js-todo-List').innerHTML=todoListHtml;
   
    }
    
const todoList=[{name:'wash dishes',
dueDate:'2024/08/23'}, 
{name:'make dinner',
dueDate:'2024/08/24'} ];
updateTodolist();
console.log(todoListHtml);
inputElement=document.querySelector('.js-todo-List').innerHTML=todoListHtml;

function addTodoList(){
    const inputElement=document.querySelector('.js-todo');
     const name = inputElement.value.trim();

    const dateinputElement=document.querySelector('.js-duedate');
    const dueDate=dateinputElement.value;
    
    if (name === '' || dueDate === '') {
        return;
    }
    console.log(name);
   todoList.push({ name, dueDate });
   console.log(todoList);
    inputElement.value = '';
    dateinputElement.value = '';

   updateTodolist();
}