
const todos = document.querySelector('#todo-list');
const form = document.querySelector('#add-todo');
const input = document.querySelector('#todo-name');

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement('li');
    newTodo.innerText = savedTodos[i].task;
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newTodo.isCompleted) {
        newTodo.style.textDecoration = 'line-through';
    }
    todos.appendChild(newTodo);
}

// prevents form's default of refreshing page once submitted
todos.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    };
});


//Adds a todo to the ul
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(input.value);
    const newTodo = document.createElement('li');
    const removeTodo = document.createElement('button');
    removeTodo.innerText = 'Remove Todo';

    newTodo.innerText = input.value;
    newTodo.appendChild(removeTodo);
    todos.appendChild(newTodo);
    input.value = ''; 
    //save to localStorage
    savedTodos.push({ task: newTodo.innerText, isCompleted: false});
    localStorage.setItem('todos', JSON.stringify(savedTodos));      
});

// what is the purpose of the input.value at the end of the above function?


//Allows user to strike through completed tasks
todos.addEventListener('click', function(e) {
    const lineThrough = e.target.tagName;
    if(lineThrough === 'LI') {
        e.target.style.textDecoration = 'line-through';
    };
})




