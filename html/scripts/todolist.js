function updateTodolist(){

    let todoListHtml='';
    for(let i=0;i<todoList.length;i++){
        const todoObject=todoList[i];
        const {name,dueDate}=todoObject;
        const html=`
       <div> ${name}</div>
      <div> ${dueDate}</div>
        <button onclick="
        todoList.splice(${i},1);
        updateTodolist();
        "class="del">delete</button>
        `
        todoListHtml+=html;
    
    }
    
    inputElement=document.querySelector('.js-todo-List').innerHTML=todoListHtml;
   
    }
    
const todoList=[{name:'wash dishes',
dueDate:'2024/08/23'}, 
{name:'make dinner',
dueDate:'2024/08/24'} ];
updateTodolist();



function addTodoList(){
    const inputElement=document.querySelector('.js-todo');
    const name=inputElement.value;
    const dateinputElement=document.querySelector('.js-duedate');
    const dueDate=dateinputElement.value;
   todoList.push({ name, dueDate });
   inputElement.value='';
   updateTodolist();
}
