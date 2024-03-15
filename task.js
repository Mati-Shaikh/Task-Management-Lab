let tasks = [];

function Task(title, description, dueDate, category, priority) {
    this.id = tasks.length + 1;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.category = category;
    this.priority = priority;
    this.completed = false;
}

function addTask(title, description, dueDate, category, priority) {
    const task = new Task(title, description, dueDate, category, priority);
    tasks.push(task);
    return task;
}

function deleteTask(id) {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    return tasks.length !== initialLength;
}


function updateTask(id, updatedTask) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const originalTask = tasks[index];
        const updatedKeys = Object.keys(updatedTask);
        updatedKeys.forEach(key => {
            originalTask[key] = updatedTask[key];
        });
        tasks[index] = originalTask;
        return tasks[index];
    }
    return null;
}


function getTaskById(id) {
    return tasks.find(task => task.id === id);
}

function getAllTasks() {
    return tasks;
}

module.exports = { addTask, deleteTask, updateTask, getTaskById, getAllTasks };
