// query selector
const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-btn")
const todoResult = document.querySelector('.todo-result')

function addTodo(e){
    // add todo-item div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add('todo-items')
    todoDiv.classList.add('d-flex')

    // add h3 , data:h3
    const newTodo = document.createElement('h3')
    newTodo.innerText = todoInput.value ;
    newTodo.classList.add('me-5')
    newTodo.classList.add('pe-5')
    newTodo.classList.add('todo-title')
    todoDiv.appendChild(newTodo)


    // creat buttons div
    const buttonDiv = document.createElement('div')
    todoDiv.appendChild(buttonDiv)

    // add complete , delete buttons
    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = `<i class="fa-regular fa-square-check icon "></i>`
    completeBtn.classList.add('complete')
    completeBtn.classList.add('check')
    buttonDiv.appendChild(completeBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash icon2"></i>`
    deleteBtn.classList.add('removed')
    deleteBtn.classList.add('remove')
    buttonDiv.appendChild(deleteBtn)
    
    // show result
    todoResult.appendChild(todoDiv)

}

todoBtn.addEventListener('click',addTodo)
