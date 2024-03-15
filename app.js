const { addTask, deleteTask, updateTask, getTaskById, getAllTasks } = require('./task');

addTask("Complete project", "Finish project assignment by Friday", "2024-03-18", "Work", "High");
addTask("Buy groceries", "Buy milk, bread, and eggs", "2024-03-16", "Errands", "Medium");

console.log("All Tasks:", getAllTasks());

console.log("Deleting Task with ID 1:", deleteTask(1));
console.log("All Tasks after deletion:", getAllTasks());

console.log("Updating Task with ID 2:");
console.log(updateTask(2, { priority: "High", completed: true }));
console.log("All Tasks after update:", getAllTasks());

console.log("Getting Task with ID 2:", getTaskById(2));
