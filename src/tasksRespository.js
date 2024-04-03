let tasks = [
    { id: 1, title: 'Task 1', description: 'Do something' },
    { id: 2, title: 'Task 2', description: 'Do something else' },
    { id: 3, title: 'Task 3', description: 'New task 3' },
    { id: 4, title: 'Task 4', description: 'New task 4' },
];


function getAll() {
    return tasks;
}

function getById(taskId) {
    return tasks.find((t) => t.id === taskId);
}

function createTask(newTask) {
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
}

function updateTask(taskId, updatedTask) {
    const index = tasks.findIndex((t) => t.id === taskId);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
        return tasks[index];
    } else {
        return null;
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter((t) => t.id !== taskId);
}

module.exports = {
    getAll,
    getById,
    createTask,
    updateTask,
    deleteTask
};