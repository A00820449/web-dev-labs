//1 Obtener las referencias de los elementos a interactuar
 
let post = document.getElementById("ButtonPost")
let clear = document.getElementById("ButtonClear")
let mark = document.getElementById("ButtonMark")
let del = document.getElementById("ButtonDelete")
 
// Registrar el Evento
 
post.addEventListener("click",TodoPost)
clear.addEventListener("click",TodoClear)
mark.addEventListener("click",TodoMark)
del.addEventListener("click",TodoDel)
 
function TodoPost(e) {
    e.preventDefault()
    
    let todo = document.getElementById("todoText").value
    let list = document.getElementById("todoList")
    
    let div = document.createElement("div")
    let input = document.createElement("input")
    let label = document.createElement("label")
    
    input.type = "checkbox"
    input.name = "todo"
    
    label.textContent = todo
    
    div.appendChild(input)
    div.appendChild(label)
    
    list.append(div)
 
}
 
function TodoClear(){
 
    let todos = document.getElementsByName("todo")
    for(const todo of todos){
        todo.checked = false
    }
 
}
 
function TodoMark() {
 
    let todos = document.getElementsByName("todo")
    for(const todo of todos){
        todo.checked = true
    }
 
}
 
function TodoDel() {
 
    let todos = document.getElementsByName("todo")

    let checkedList = [];

    for (const todo of todos) {
        if (todo.checked) {
            checkedList.push(todo.parentElement)
        }
    }

    for (const todo of checkedList) {
        todo.remove()
    }
 
}