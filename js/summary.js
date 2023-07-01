let loadedTasks = []
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


async function initSummary() {
    await taskLoader();
    renderAllTasks();
}

async function taskLoader() {
    let res = await getItem('allTasks');
    loadedTasks = JSON.parse(res);
}

function renderAllTasks() {
    console.log(loadedTasks);
    renderOpenTasks()
    renderProgressTasks();
    renderFeedbackTasks();
    renderprioTasks();
    renderTodos();
    renderDoneTasks();
}

function renderDoneTasks() {
    let content = document.querySelector('#done-counter');
    let counter = 0;
    for (let i = 0; i<loadedTasks.length; i++) {
        const element = loadedTasks[i];
        if (element.status === 'done'){
            counter++;
        }
    }
    content.innerHTML = counter;
}

function renderTodos() {
    let content = document.querySelector('.direction-all-tasks > .box-design > .counter > p');
    let counter = 0;
    for (let i = 0; i<loadedTasks.length; i++) {
        const element = loadedTasks[i];
        if (element.status === 'todo'){
            counter++;
        }
    }
    content.innerHTML = counter;
}

function renderOpenTasks() {
    const openTasks = document.querySelector('#taskSum > p');
    openTasks.innerHTML = `${loadedTasks.length}`;
}

function renderFeedbackTasks() {
    let feedbackTasks = document.getElementById('feedbackSum');
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

function renderProgressTasks() {
    let progressTasks = document.getElementById('progressSum');
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

function renderprioTasks() {
    let counter = 0;
    let dueDate;
    let content = document.querySelector('.border-urgend-task > p');
    for (let i = 0; i<loadedTasks.length; i++) {
        const element = loadedTasks[i]
        if (element.prio === 'urgent') {
            counter++;
            dueDate = element.dueDate;
        }
    };
    content.innerText = `${counter}`;
    convertToDateObject(dueDate);
    
}

function renderDate(day, month, year) {
    let dueDateBox = document.querySelector('.deadline-task-position > span > b');
    dueDateBox.innerText = `${month} ${day}, ${year}`;
}

function formatDate(dateObject) {
    let day = dateObject.getDate();
    let month = months[dateObject.getMonth()];
    let year = dateObject.getFullYear();
    renderDate(day, month, year);
}

function convertToDateObject(dueDate) {
    let date = new Date(dueDate);
    formatDate(date);
}

function getDateFromTask(element) {
    console.log(element.dueDate)
    return element.dueDate;
}