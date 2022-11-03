// query selector
const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-btn")
const todoResult = document.querySelector('.todo-result')

function addTodo(e){
    e.preventDefault();
    // add todo-item div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add('todo-items')
    todoDiv.classList.add('d-flex')

    // add h3 , data:h3
    const newTodo = document.createElement('h3')
    newTodo.innerText = todoInput.value ;
    newTodo.classList.add('me-auto')
    newTodo.classList.add('pe-5')
    newTodo.classList.add('todo-title')
    todoDiv.appendChild(newTodo)

    // remove data from input
    todoInput.value=''

    // creat buttons div
    const buttonDiv = document.createElement('div')
    todoDiv.appendChild(buttonDiv)

    // add complete , delete buttons
    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = `<i class="fa-regular fa-square-check todo-check icon "></i>`
    completeBtn.classList.add('check')
    buttonDiv.appendChild(completeBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash todo-remove icon2"></i>`
    deleteBtn.classList.add('remove')
    buttonDiv.appendChild(deleteBtn)
    
    // show result
    todoResult.appendChild(todoDiv)

}

function toggleToDo(e){
        const item = e.target
       // console.log(item.classList)
         
        if (item.classList[3] == 'icon'){
            const btn_div = item.parentElement.parentElement.parentElement
            btn_div.childNodes[0].classList.toggle('complete-todo')
        }
        
        if (item.classList[3] == "icon2"){
            const btn_div = item.parentElement.parentElement.parentElement
            btn_div.childNodes[0].classList.add('remove-todo')
            btn_div.childNodes[1].classList.add('remove-todo')
        }
}


todoBtn.addEventListener('click',addTodo)
todoResult.addEventListener('click',toggleToDo)
