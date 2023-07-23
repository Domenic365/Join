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
    for (let i = 0; i < todos.length; i++) {
        container.innerHTML += /*html*/`
        <div class="box-task-design" draggable="true" onclick="openTaskDetails('${todos[i]['task-id']}')" ondragstart="startDragging(${todos[i]['task-id']})">
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
            <div id="prio-status"></div>
            </div>
        </div>
        `
        renderBoardAssignings(todos[i], i);
    }
}


function renderBoardAssignings(task, taskID) {
    let workerbox = document.getElementById(`${task.status}${taskID}-workers`);
    workerbox.innerHTML = ''
    for (let j = 0; j < task.assignedTo.length; j++) { //Fehler: hier wird die Länge des Strings genommen statt der Länge des Arrays, weil kein Array mehr erzeugt wird bei der Kontaktzuweisung
        workerbox.innerHTML += `
            <p class="worker-a">${task.assignedTo[j].split(" ").map((n) => n[0]).join("")}</p>
            `
    }
}


function getBoardTasks(status) {
    let arr = [];
    for (i = 0; i < allTasks.length; i++) {
        if (allTasks[i].status == status) {
            arr.push(allTasks[i])
        }
    }
    if (arr.length < 1) {
        return false;
    } else if (arr.length > 0) {
        return arr;
    }
}


function renderBoardProgress() {
    let container = document.getElementById('progress-col');
    container.innerHTML = '';
    let todos = getBoardTasks("inProgress");
    for (let i = 0; i < todos.length; i++) {
        container.innerHTML += `
        <div class="box-task-design" draggable="true" onclick="openTaskDetails('${todos[i]['task-id']}')" ondragstart="startDragging(${todos[i]['task-id']})">
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
        renderBoardAssignings(todos[i], i);
    }
}


function renderBoardFeedback() {
    let container = document.getElementById('feedback-col');
    container.innerHTML = '';
    let todos = getBoardTasks('feedback');
    for (let i = 0; i < todos.length; i++) {
        container.innerHTML += `
        <div class="box-task-design" draggable="true" onclick="openTaskDetails('${todos[i]['task-id']}')" ondragstart="startDragging(${todos[i]['task-id']})">
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
        renderBoardAssignings(todos[i], i);
    }
}


function renderBoardDone() {
    let container = document.getElementById('done-col');
    container.innerHTML = '';
    let todos = getBoardTasks('done');
    for (let i = 0; i < todos.length; i++) {
        container.innerHTML += `
        <div class="box-task-design" draggable="true" onclick="openTaskDetails('${todos[i]['task-id']}')" ondragstart="startDragging(${todos[i]['task-id']})">
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
        renderBoardAssignings(todos[i], i);
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
    initBoard();
}


function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
    initBoard();
}


//****** Open task details *******//
function openTaskDetails(taskId) {
    document.getElementById('show-details').classList.remove('d-none');
    getAllTaskInfo(taskId);
}


function getAllTaskInfo(taskId) {
    let container = document.getElementById('show-details');
    container.innerHTML = '';

    let task = allTasks.find(task => task['task-id'] === taskId);
    container.innerHTML = /*html*/`
        <div class="task-info" id="card-detail">
            <div class="close-btn-container" onclick="closeWindow()">
                <img src="../../assets/img/icons/cross.svg" alt="Close button">
            </div>
            <div class="delete-edit-container">
                <img class="del-btn" src="../../assets/img/icons/delete-btn-bright.svg" alt="Delete button" onclick="deleteTask(${taskId})">
                <img class="edit-btn" src="../../assets/img/icons/edit-btn-dark.svg" alt="Edit button" onclick="editTask(${taskId})">
            </div>
            <div class="category mg-det-view ${task.catColor}Cat">
                <h3>${task.category}</h3>
            </div>    
                <div class="det-title">
                    <h1>${task.title}</h1>
                </div>
                <div class="text-type">
                    <span>${task.description}</span>
                </div>
                <div class="text-type">
                    <h2>Due Date:</h2>
                    <span>${task.dueDate}</span>
                </div> 
                <div class="text-type">
                    <h2>Priority:</h2>
                    <span id="getPrio">${task.prio}</span>
                </div>
                <div>
                    <h2>Assigned to:</h2>
                </div>
                <div class="worker-container text-type"">
                     <div class="worker" id="${task.status}${taskId}-workers"></div>
                     <span>${task.assignedTo}</span><br>
                    </div>
            </div>
        <div class="popup-bg" onclick="closeWindow()"></div>
        `;
    renderBoardAssignings(task, taskId);
    prioStatusDetailView(taskId);
    console.log('zeigt alle Daten vom Task an', task)
    console.log('Aktuelle Prio vom Task:', task.prio);
}


//Fetches the information about the status of the clicked task and displays it in the openTaksDetails view.
function prioStatusDetailView(taskId) {

    let task = allTasks.find(task => task['task-id'] === taskId);
    if (task.prio === 'Urgent') {
        document.getElementById('getPrio').innerHTML = /*html*/ `
                    <div class="urgent activeUrgent activePick border-status">
                        Urgent <span class="prio-img"><img src="../img/icons/urgent-nofill-orange.svg" alt=""></span>
                    </div>`;

    } else if (task.prio === 'Medium') {
        document.getElementById('getPrio').innerHTML = /*html*/ `
                    <div class="medium activeMedium activePick border-status">
                        Medium <span class="prio-img"><img src="../img/icons/medium_nofill_orange.svg" alt=""></span>
                    </div>`;

    } else if (task.prio === 'Low') {
        document.getElementById('getPrio').innerHTML = /*html*/ `
                    <div class="low activeLow activePick border-status">
                        Low <span class="prio-img"><img src="../img/icons/low_nofill_green.svg" alt=""></span>
                    </div>`;
    }
}


function closeWindow() {
    document.getElementById('show-details').classList.add('d-none');
    document.getElementById('edit-task').classList.add('d-none');
}


function deleteTask(taskID) {
    allTasks[taskID]['status'] = 'deleted';
    uploadTasks();
    initBoard();
    closeWindow();
}


function searchTask() {
    let search = document.getElementById('search-task').value;
    search = search.toLowerCase();
    renderSearchTodo(search);
    renderSearchProgress(search);
    renderSearchFeedback(search);
    renderSearchDone(search);
}


function renderSearchTodo(search) {
    let todoContainer = document.getElementById('todo-col');
    let todoTasks = getBoardTasks('todo');
    todoContainer.innerHTML = '';

    for (let i = 0; i < todoTasks.length; i++) {
        let title = todoTasks[i].title;
        let description = todoTasks[i].description;
        if (title.toLowerCase().includes(search) || description.toLowerCase().includes(search)) {
            todoContainer.innerHTML += `
            <div class="box-task-design" draggable="true" onclick="openTaskDetails('${todoTasks[i]['task-id']}')" ondragstart="startDragging(${todoTasks[i]['task-id']})">
                <div class="category ${todoTasks[i].catColor}Cat">
                    <h3>${todoTasks[i].category}</h3>
                </div>
                <div class="task-name">
                    <h4>${todoTasks[i].title}</h4>
                </div>
                <div class="task-description">
                    <span>${todoTasks[i].description}</span>
                </div>
                <div class="progress-bar"></div>
                <div class="worker" id="${todoTasks[i].status}${i}-workers">
                </div>
            </div>
            `;
            renderBoardAssignings(todoTasks[i], i);
        }
    }
}


function renderSearchProgress(search) {
    let progressContainer = document.getElementById('progress-col');
    progressContainer.innerHTML = '';
    let progressTasks = getBoardTasks('inProgress');

    for (let i = 0; i < progressTasks.length; i++) {
        let title = progressTasks[i].title;
        let description = progressTasks[i].description;
        if (title.toLowerCase().includes(search) || description.toLowerCase().includes(search)) {
            progressContainer.innerHTML += `
            <div class="box-task-design" draggable="true" onclick="openTaskDetails('${progressTasks[i]['task-id']}')" ondragstart="startDragging(${progressTasks[i]['task-id']})">
                <div class="category ${progressTasks[i].catColor}Cat">
                    <h3>${progressTasks[i].category}</h3>
                </div>
                <div class="task-name">
                    <h4>${progressTasks[i].title}</h4>
                </div>
                <div class="task-description">
                    <span>${progressTasks[i].description}</span>
                </div>
                <div class="progress-bar"></div>
                <div class="worker" id="${progressTasks[i].status}${i}-workers">
                </div>
            </div>
            `;
            renderBoardAssignings(progressTasks[i], i);
        }
    }
}


function renderSearchFeedback(search) {
    let feedbackContainer = document.getElementById('feedback-col');
    feedbackContainer.innerHTML = '';
    let feedbackTasks = getBoardTasks('feedback');

    for (let i = 0; i < feedbackTasks.length; i++) {
        let title = feedbackTasks[i].title;
        let description = feedbackTasks[i].description;
        if (title.toLowerCase().includes(search) || description.toLowerCase().includes(search)) {
            feedbackContainer.innerHTML += `
            <div class="box-task-design" draggable="true" onclick="openTaskDetails('${feedbackTasks[i]['task-id']}')" ondragstart="startDragging(${feedbackTasks[i]['task-id']})">
                <div class="category ${feedbackTasks[i].catColor}Cat">
                    <h3>${feedbackTasks[i].category}</h3>
                </div>
                <div class="task-name">
                    <h4>${feedbackTasks[i].title}</h4>
                </div>
                <div class="task-description">
                    <span>${feedbackTasks[i].description}</span>
                </div>
                <div class="progress-bar"></div>
                <div class="worker" id="${feedbackTasks[i].status}${i}-workers">
                </div>
            </div>
            `;
            renderBoardAssignings(feedbackTasks[i], i);
        }
    }
}


function renderSearchDone(search) {
    let doneContainer = document.getElementById('done-col');
    doneContainer.innerHTML = '';
    let doneTasks = getBoardTasks('done');

    for (let i = 0; i < doneTasks.length; i++) {
        let title = doneTasks[i].title;
        let description = doneTasks[i].description;
        if (title.toLowerCase().includes(search) || description.toLowerCase().includes(search)) {
            doneContainer.innerHTML += `
            <div class="box-task-design" draggable="true" onclick="openTaskDetails('${doneTasks[i]['task-id']}')" ondragstart="startDragging(${doneTasks[i]['task-id']})">
                <div class="category ${doneTasks[i].catColor}Cat">
                    <h3>${doneTasks[i].category}</h3>
                </div>
                <div class="task-name">
                    <h4>${doneTasks[i].title}</h4>
                </div>
                <div class="task-description">
                    <span>${doneTasks[i].description}</span>
                </div>
                <div class="progress-bar"></div>
                <div class="worker" id="${doneTasks[i].status}${i}-workers">
                </div>
            </div>
            `;
            renderBoardAssignings(doneTasks[i], i);
        }
    }
}


function editTask(taskId) {
    document.getElementById('show-details').classList.add('d-none');
    document.getElementById('edit-task').classList.remove('d-none');
    let task = allTasks.find(task => task['task-id'] == taskId);

    let container = document.getElementById('edit-task');
    container.innerHTML = '';
    container.innerHTML = /*html*/`
        <div class="edit-task">
            <div class="close-btn-container" onclick="closeWindow()">
                  <img src="../../assets/img/icons/cross.svg" alt="Close button">
            </div>
            <div class="form-item">
                  <label class="lbl-font" for="edit-title">Title:</label>
                  <input class="input-design" type="text" id="edit-title" value="${task.title}">
            </div>
            <div class="form-item">
                 <label class="lbl-font" for="edit-description">Description:</label>
                 <textarea id="edit-description">${task.description}</textarea>
             </div>
             <div class="form-item">
                  <label class="lbl-font" for="edit-due-date">Due Date:</label>
                  <input class="input-design" type="date" id="edit-due-date" value="${task.dueDate}">
             </div>
             <div class="form-item">Prio</div>
             <div class="prio-buttons">
                  <div class="urgent border-color" id="urgent-edit" onclick="pickPrio('urgent')">
                        Urgent <span class="prio-img"><img src="../img/icons/urgent-nofill-orange.svg" alt=""></span>
                  </div>
                  <div class="medium border-color" id="medium-edit" onclick="pickPrio('medium')">
                        Medium <span class="prio-img"><img src="../img/icons/medium_nofill_orange.svg" alt=""></span>
                  </div>
                  <div class="low border-color" id="low-edit" onclick="pickPrio('low')">
                        Low <span class="prio-img"><img src="../img/icons/low_nofill_green.svg" alt=""></span>
                  </div>
            </div>
            <div class="dropdown-placeholder mg-dropdown border-color" id="contacts-input" onclick="toggleAssigning()">Select contacts to assign<span>&lt;</span></div>
                 <button class="save-btn" onclick="saveEditData('${taskId}', document.getElementById('edit-title').value, document.getElementById('edit-description').value, document.getElementById('edit-due-date').value)">Save
                 <img src="../../assets/img/icons/check-icon-white.svg"" alt="Save Button"></button>
            </div>
        <div class="popup-bg" onclick="closeWindow()"></div>
           `;
    showPrioStatusEditView(taskId);
}


function showPrioStatusEditView(taskId) {
    // Find the task in allTasks based on the taskId
    let task = allTasks.find(task => task['task-id'] == taskId);
    // Check the priority of the task and apply the corresponding classes
    if (task.prio === 'Urgent') {
        document.getElementById('urgent-edit').classList.add('activeUrgent', 'activePick');
    } else if (task.prio === 'Medium') {
        document.getElementById('medium-edit').classList.add('activeMedium', 'activePick');
    } else if (task.prio === 'Low') {
        document.getElementById('low-edit').classList.add('activeLow', 'activePick');
    }
}


function saveEditData(taskId, editTitle, editDescription, editDueDate) {
    // Find the task in allTasks based on the taskId
    let task = allTasks.find(task => task['task-id'] === taskId);
    // Get the selected priority
    const selectedPriority = document.querySelector('.activePick');
    if (selectedPriority) {
        task.prio = selectedPriority.innerText;
    }
    // Update the properties of the task with the edited values
    task.title = editTitle;
    task.description = editDescription;
    task.dueDate = editDueDate;

   

    uploadTasks();
    initBoard();
    closeWindow();
    console.log('Prio geändert auf', task.prio)
}
