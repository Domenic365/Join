let loadedTasks = [];
console.log(loadedTasks);


async function initSummary() {
    await taskLoader();
    renderAllTasks();
    loadAllTasksFromStg();
}

async function taskLoader() {
    let res = await getItem('allTasks');
    loadedTasks = JSON.parse(res);
}
console.log(loadedTasks);

function renderAllTasks() {
    let openTasks = document.getElementById('taskSum');
    let progressTasks = document.getElementById('progressSum');
    let feedbackTasks = document.getElementById('feedbackSum');

    console.log(loadedTasks);
    openTasks.innerHTML = `
        <p>${loadedTasks.length}</p>
        <span>Tasks in <br> Board</span>
    `
}

console.log(loadedTasks);