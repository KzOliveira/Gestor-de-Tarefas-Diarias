class TaskManager {
    constructor() {
        this.taskForm = document.getElementById('task-form');
        this.taskList = document.getElementById('task-list');
        this.taskForm.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        const priority = document.getElementById('priority').value;
        const date = document.getElementById('date').value;

        const task = {
            title,
            description,
            category,
            priority,
            date
        }

        this.addTaskToList(task);

        this.taskForm.reset();
    }

    addTaskToList(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${task.title}</h3>
            <p>Descrição: ${task.description}</p>
            <p>Categoria: ${task.category}</p>
            <p>Prioridade: ${task.priority}</p>
            <p>Data: ${task.date}</p>
        `;

        this.taskList.appendChild(li);
    }
}

const taskManager = new TaskManager();
