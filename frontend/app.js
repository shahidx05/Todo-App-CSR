const API_URL = 'http://localhost:5000/api/todos';

const addbtn = document.querySelector('#addbtn')
const input = document.querySelector('#input')
const todoContainer = document.querySelector('.todo-container')
const filterbtns = document.querySelectorAll('.filters a')
const deleteCompletebtn = document.querySelector('.deleteall')

let editTodo = null
let filter = 'all'

async function fetchTodos() {
    try {
        let url = API_URL
        if (filter !== 'all') url += `/filter/${filter}`;

        const res = await fetch(url)
        if (!res.ok) throw new Error('Failed to fetch todos');

        const todos = await res.json()

        renderTodos(todos)
    }
    catch (error) {
        console.error(error);
        todoContainer.innerHTML = `<p id="error">Error loading todos</p>`;
    }
}

function renderTodos(todos) {
    todoContainer.innerHTML = '';

    if (todos.length === 0) {
        todoContainer.innerHTML = `<p id="empty">No todos yet!</p>`;
        return
    }

    todos.forEach(todo => {
        const div = document.createElement('div')
        div.classList.add('todo')

        div.innerHTML = `
            <input type="checkbox" class="check" data-id="${todo._id}" ${todo.check ? 'checked' : ''}>

            <div>
                <span class="${todo.check ? 'completed' : ''}">${todo.title}</span>
                <div class="btns">
                    <a class="edit" data-id="${todo._id}">Edit</a>
                    <a class="delete" data-id="${todo._id}">Delete</a>
                </div>
            </div>
        `;

        todoContainer.appendChild(div)
    });
}

addbtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const title = input.value.trim()
    if (!title) return

    if (editTodo) {
        const res = await fetch(`${API_URL}/edit/${editTodo}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        })
        addbtn.textContent = 'Add';
        input.classList.remove('editing');
        addbtn.classList.remove('update')
        editTodo = null
    }
    else {
        const res = await fetch(`${API_URL}/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        })
    }

    input.value = ''

    await fetchTodos()
})

filterbtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterbtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filter = btn.dataset.filter;
        fetchTodos()
    })
})

deleteCompletebtn.addEventListener('click', async () => {
    await fetch(`${API_URL}/deleteAllcomplete`, { method: 'DELETE' })
    await fetchTodos()
})

todoContainer.addEventListener('click', async (e) => {
    const target = e.target;
    const id = target.dataset.id

    if (target.classList.contains('check')) {
        const isChecked = target.checked
        await fetch(`${API_URL}/mark/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ check: isChecked })
        })
        fetchTodos();
    }

    if (target.classList.contains('delete')) {
        await fetch(`${API_URL}/delete/${id}`, { method: "DELETE" })
        if(editTodo){
            input.value = ''
            addbtn.textContent = 'Add';
            addbtn.classList.remove('update')
            input.classList.remove('editing');
            editTodo = null
        }
        fetchTodos();
    }

    if (target.classList.contains('edit')) {
        const todo = target.closest('.todo');
        const title = todo.querySelector('span').textContent;
        input.value = title
        editTodo = id;
        input.classList.add('editing');
        addbtn.textContent = "Update";
        addbtn.classList.add('update')
    }
})

fetchTodos()