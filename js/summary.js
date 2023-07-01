let loadedTasks = []



async function initSummary() {
    await taskLoader();
    renderAllTasks();
    loadAllTasksFromStg();
}

async function taskLoader() {
    let res = await getItem('allTasks');
    loadedTasks = JSON.parse(res);
}

function renderAllTasks() {
    let openTasks = document.getElementById('taskSum');
    let progressTasks = document.getElementById('progressSum');
    let feedbackTasks = document.getElementById('feedbackSum');
    console.log(loadedTasks);
    openTasks.innerHTML = `
        <p>${loadedTasks.length}</p>
        <span>Tasks in <br> Board</span>
    `;
    renderProgressTasks(progressTasks, loadedTasks);
    renderFeedbackTasks(feedbackTasks, loadedTasks);
}

function renderFeedbackTasks(feedbackTasks, loadedTasks) {
    let counter = 0;
    for (let i = 0; i<loadedTasks.length; i++) {
        const element = loadedTasks[i]
        if (element.status === 'feedback') {
            counter++;
        }
    };
    feedbackTasks.innerHTML = `
        <p>${counter}</p>
        <span>Awaiting<br>Feedback</span>
    `;
}

function renderProgressTasks(progressTasks, loadedTasks) {
    let counter = 0;
    for (let i = 0; i<loadedTasks.length; i++) {
        const element = loadedTasks[i]
        if (element.status === 'inProgress') {
            counter++;
        }
    };
    progressTasks.innerHTML = `
        <p>${counter}</p>
        <span>Tasks in <br> Progress</span>
    `;
}