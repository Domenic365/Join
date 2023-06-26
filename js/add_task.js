"use strict";
let allTasks = [];

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

function getSubtasks() {
    let subtaskArray = [];
    let subtasks = document.querySelectorAll('.subtask-list > li > label');
    for (let i = 0; i<subtasks.length; i++) {
        const sub = subtasks[i];
        subtaskArray.push(sub.outerText);
    }
    return subtaskArray;
}

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

function chosenCategory(value) {
    let color = colorSearch(value);
    let dropdownContent = document.getElementById('category-input');
    dropdownContent.innerHTML = `<div class="pickedCat">${value} <div class="${color}"></div></div><span class="active-dropdown">&lt;</span>`;
    dropdownContent.classList.add('cat-picked');
    toggleDropdown();
}

function colorSearch(value) {
    for (let i = 0; i < categorys.length; i++) {
        const element = categorys[i];
        if (element.name == value) {
            return element.color;
        }
    }
}

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

function showNotification() {
    let alert = document.getElementById('notification');
    alert.classList.add('active-note');
    setTimeout(() => {
        alert.classList.remove('active-note');
    }, 2000);
}

function titleValidation(title) {
    let validationItem = document.getElementById('title-validation');
    if (title.value.trim() === '') {
        validationItem.classList.remove('d-none');
    } else {
        validationItem.classList.add('d-none');
        return true;
    }
}

function descriptionValidation(description) {
    let validationItem = document.getElementById('description-validation');
    if (description.value.trim() === '') {
        validationItem.classList.remove('d-none');
    } else {
        validationItem.classList.add('d-none');
        return true;
    }
}

function catValidation(category) {
    let validationItem = document.getElementById('category-validation');
    if (category.innerHTML == 'Choose Category<span>&lt;</span>') {
        validationItem.classList.remove('d-none')
    } else {
        validationItem.classList.add('d-none');
        return true;
    }
}

function dateValidation(date) {
    let validationItem = document.getElementById('date-validation');
    if (date.value == '') {
        validationItem.classList.remove('d-none');
    } else {
        validationItem.classList.add('d-none');
        return true;
    }
}

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

function resetValidation() {
    let validation = document.querySelectorAll('.invalid');
    for (let i = 0; i<validation.length; i++) {
        validation[i].classList.add('d-none');
    }
}
