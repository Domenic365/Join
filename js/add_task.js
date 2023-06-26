"use strict";
/**
 * Json for all tasks
 */
let allTasks = [];

/**
 * This function creates a new Task by collecting the form data and pushs it into the allTasks JSON
 * 
 * @param {string} status - is an optional parameter to sort the task in the right kanban column
 * 
 */
function createNewTask(status = 'todo') {
    let title = document.getElementById('title-input').value;
    let description = document.getElementById('description').value;
    let category = document.querySelector('.pickedCat').innerText;
    let categoryColor = document.querySelector('.pickedCat > div').className;
    let contacts = getAssignedContacts();
    let date = document.getElementById('due-date').value;
    let prio = document.querySelector('.activePick').innerText;
    let subtasks =  getSubtasks();

    allTasks.push({
        'title' : title,
        'description' : description,
        'category' : category,
        'catColor' : categoryColor,
        'assignedTo' : contacts,
        'dueDate': date,
        'prio' : prio,
        'subtasks' : subtasks,
        'status' : status
    })
    console.log(allTasks);
};

/**
 * This function collects all subtasks from input an pushes it into an array of subtasks
 * 
 * @returns array with Subtasks to place in allTasks json
 */
function getSubtasks() {
    let subtaskArray = [];
    let subtasks = document.querySelectorAll('.subtask-list > li > label');
    for (let i = 0; i<subtasks.length; i++) {
        const sub = subtasks[i];
        subtaskArray.push(sub.outerText);
    }
    return subtaskArray;
}

/**
 * This function is responsible to deliver the contacts, whose inputs are checked to assign to new task
 * 
 * @returns array with checked contacts to assign the task to
 */
function getAssignedContacts() {
    let contacts = document.querySelectorAll('#contact-selection > .contact-item'); // alle, die mit "checked" input sind
    let contactArray = [];
    for (let i = 0; i<contacts.length -1; i++) {
        if (contacts[i].lastChild.childNodes[1].checked == true) {
            contactArray.push(contacts[i].innerText);
        }
    }
    return contactArray;
}


/**
 * This function puts the picked color and the name of new category as spaceholde in the category input
 * 
 * @param {string} value - 
 */
function chosenCategory(value) {
    let color = colorSearch(value);
    let dropdownContent = document.getElementById('category-input');
    dropdownContent.innerHTML = `<div class="pickedCat">${value} <div class="${color}"></div></div><span class="active-dropdown">&lt;</span>`;
    dropdownContent.classList.add('cat-picked');
    toggleDropdown();
}

/**
 * function to get the picked color of new category
 * 
 * @param {string} value - to identify picked color
 * @returns - picked color
 */
function colorSearch(value) {
    for (let i = 0; i < categorys.length; i++) {
        const element = categorys[i];
        if (element.name == value) {
            return element.color;
        }
    }
}
/**
 * this function takes input-value of subtask input and adds it to subtask list
 */
function saveSubtask() {
    let task = document.getElementById('subtask-value');
    let list = document.getElementById('subtask-overview');

    list.innerHTML += `
        <li class="subtask-item">
            <input type="checkbox" id="${task.value}" name="${task.value}" value="subtask3.value">
            <label for="${task.value}">${task.value}</label>
        </li>
    `;
    task.value = '';
    cancelInput('subtask');
}

/**
 * this function starts the form validation and if form is valid, shows success-notifation and 
 * calls  the actual function to create the task
 */
function validateForm() {
    let title = document.getElementById('title-input');
    let description = document.getElementById('description');
    let category = document.getElementById('category-input');
    let date = document.getElementById('due-date');
    let titleStat = titleValidation(title);
    let descriptionStat = descriptionValidation(description);
    let catStat = catValidation(category);
    let dateStat = dateValidation(date);
    let prioStat = prioValidation();
    if (titleStat && descriptionStat && catStat && dateStat && prioStat) {
        createNewTask();
        showNotification();
    }
}

/**
 * function to show notification with 2 sec timeout
 */
function showNotification() {
    let alert = document.getElementById('notification');
    alert.classList.add('active-note');
    setTimeout(() => {
        alert.classList.remove('active-note');
    }, 2000);
}


/**
 * this function validates the title input in addtask form.
 * 
 * @param {element} title - element node of title-input in addtask-form
 * @returns true if value isnt empty after trim()
 */
function titleValidation(title) {
    let validationItem = document.getElementById('title-validation');
    if (title.value.trim() === '') {
        validationItem.classList.remove('d-none');
    } else {
        validationItem.classList.add('d-none');
        return true;
    }
}

/**
 * this function validates the description of new task
 * 
 * @param {element} description - Dom-element of textarea
 * @returns true if description exists
 */
function descriptionValidation(description) {
    let validationItem = document.getElementById('description-validation');
    if (description.value.trim() === '') {
        validationItem.classList.remove('d-none');
    } else {
        validationItem.classList.add('d-none');
        return true;
    }
}

/**
 * this funtion validates the category of new task item
 * 
 * @param {element} category - dom element of category dropdown
 * @returns - true, if category is set.
 */
function catValidation(category) {
    let validationItem = document.getElementById('category-validation');
    if (category.innerHTML == 'Choose Category<span>&lt;</span>') {
        validationItem.classList.remove('d-none')
    } else {
        validationItem.classList.add('d-none');
        return true;
    }
}

/**
 * function to see if user picked a date
 * 
 * @param {element} date - dom element of due date input
 * @returns true if date is set.
 */
function dateValidation(date) {
    let validationItem = document.getElementById('date-validation');
    if (date.value == '') {
        validationItem.classList.remove('d-none');
    } else {
        validationItem.classList.add('d-none');
        return true;
    }
}

/**
 * validation function to check if priority button is picked
 * 
 * @returns true if a prio button is picked. if not, message of required input is shown
 */
function prioValidation() {
    let urgent = document.getElementById('urgent');
    let medium = document.getElementById('medium');
    let low = document.getElementById('low');
    let validationItem = document.getElementById('prio-validation');
    if (urgent.classList.contains('activePick')) {
        validationItem.classList.add('d-none');
        return true;
    } else if (medium.classList.contains('activePick')) {
        validationItem.classList.add('d-none');
        return true;
    } else if (low.classList.contains('activePick')) {
        validationItem.classList.add('d-none');
        return true;
    } else {
        validationItem.classList.remove('d-none')
    }
}


/**
 * function to reset the validation items. if this function is called, no "invalid"-message will be shown
 */
function resetValidation() {
    let validation = document.querySelectorAll('.invalid');
    for (let i = 0; i<validation.length; i++) {
        validation[i].classList.add('d-none');
    }
}
