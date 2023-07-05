async function initBoard() {
    await loadAllTasksFromStg();
    renderBoardTodos();
    renderBoardProgress();
    renderBoardFeedback();
    renderBoardDone();
}

function renderBoardTodos() {
    let container = document.getElementById('todo-col');
    container.innerHTML = '';
    let todos = getBoardTasks('todo');
    for (let i = 0; i<todos.length; i++) {
        container.innerHTML += `
        <div class="box-task-design" draggable="true" ondragstart="startDragging(${todos[i]['task-id']})">
            <div class="category ${todos[i].catColor}Cat">
                <h3>${todos[i].category}</h3>
            </div>
            <div class="task-name">
                <h4>${todos[i].title}</h4>
            </div>
            <div class="task-description">
                <span>${todos[i].description}</span>
            </div>
            <div class="progress-bar"></div>
            <div class="worker" id="${todos[i].status}${i}-workers">
            </div>
        </div>
        `
        renderBoardAssignings(todos[i],i);
    }
}

function renderBoardAssignings(task, taskID) {
    let workerbox = document.getElementById(`${task.status}${taskID}-workers`);
        workerbox.innerHTML = ''
        for (let j = 0; j<task.assignedTo.length; j++) {
            workerbox.innerHTML += `
            <p class="worker-a">${task.assignedTo[j].split(" ").map((n)=>n[0]).join("")}</p>
            `
        }
}


function getBoardTasks(status) {
    let arr = [];
    for (i = 0; i<allTasks.length; i++) {
        if (allTasks[i].status == status) {
            arr.push(allTasks[i])
        }
    }
    if (arr.length < 1) {
        return false;
    } else if (arr.length>0) {
        return arr;
    }
    
}

function renderBoardProgress() {
    let container = document.getElementById('progress-col');
    container.innerHTML='';
    let todos = getBoardTasks("inPorgress");
    for (let i = 0; i<todos.length; i++) {
        container.innerHTML += `
        <div class="box-task-design" draggable="true" ondragstart="startDragging(${todos[i]['task-id']})">
            <div class="category ${todos[i].catColor}Cat">
                <h3>${todos[i].category}</h3>
            </div>
            <div class="task-name">
                <h4>${todos[i].title}</h4>
            </div>
            <div class="task-description">
                <span>${todos[i].description}</span>
            </div>
            <div class="progress-bar"></div>
            <div class="worker" id="${todos[i].status}${i}-workers">
            </div>
        </div>
        `
        renderBoardAssignings(todos[i],i);
    }
}

function renderBoardFeedback() {
    let container = document.getElementById('feedback-col');
    container.innerHTML='';
    let todos = getBoardTasks('feedback');
    for (let i = 0; i<todos.length; i++) {
        container.innerHTML += `
        <div class="box-task-design" draggable="true" ondragstart="startDragging(${todos[i]['task-id']})">
            <div class="category ${todos[i].catColor}Cat">
                <h3>${todos[i].category}</h3>
            </div>
            <div class="task-name">
                <h4>${todos[i].title}</h4>
            </div>
            <div class="task-description">
                <span>${todos[i].description}</span>
            </div>
            <div class="progress-bar"></div>
            <div class="worker" id="${todos[i].status}${i}-workers">
            </div>
        </div>
        `
        renderBoardAssignings(todos[i],i);
    }
}

function renderBoardDone() {
    let container = document.getElementById('done-col');
    container.innerHTML='';
    let todos = getBoardTasks('done');
    for (let i = 0; i<todos.length; i++) {
        container.innerHTML += `
        <div class="box-task-design" draggable="true" ondragstart="startDragging(${todos[i]['task-id']})">
            <div class="category ${todos[i].catColor}Cat">
                <h3>${todos[i].category}</h3>
            </div>
            <div class="task-name">
                <h4>${todos[i].title}</h4>
            </div>
            <div class="task-description">
                <span>${todos[i].description}</span>
            </div>
            <div class="progress-bar"></div>
            <div class="worker" id="${todos[i].status}${i}-workers">
            </div>
        </div>
        `
        renderBoardAssignings(todos[i],i);
    }
}

let currentDraggedElement;

function startDragging(id) {
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault(); 
}

function moveTo(category) {
    allTasks[currentDraggedElement]['status'] = category;
    uploadTasks();
    initBoard();
}

function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}