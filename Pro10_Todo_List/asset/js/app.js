const form = document.querySelector('form');
const input = document.querySelector('input');
const btnAdd = document.querySelector('btn-add');
const ul = document.querySelector('.todos');

function addTodo(val) {
    const li = document.createElement('li')

	li.innerHTML = `
        <span>${val}</span>
        <i class="fas fa-trash"></i>
    `

    li.addEventListener('click', function () {
		this.classList.toggle('completed');
    })

    li.querySelector('i').addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })

	ul.appendChild(li)
	updateTodos()
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = input.value.trim()
    console.log(text);
    text != '' ? addTodo(text) : undefined
    input.value = ''
})

function updateTodos() {
    const list = document.querySelectorAll('li');

    const todos = [];

    list.forEach(item => {
        todos.push(item);
    })

    console.log(todos);
}


updateTodos();