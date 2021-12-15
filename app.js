
const todos = document.querySelector('#todo-list');
const form = document.querySelector('#add-todo');
const input = document.querySelector('#todo-name');

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
})

// what is the purpose of the input.value at the end of the above function?


//Allows user to strike through completed tasks
todos.addEventListener('click', function(e) {
    const lineThrough = e.target.tagName;
    if(lineThrough === 'LI') {
        e.target.style.textDecoration = 'line-through';
    };
})




