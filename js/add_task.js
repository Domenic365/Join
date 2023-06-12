"use strict";

let task = {
    title: 'Design',
    description: 'sdogfhasdliguhs',
    category: '',
    catColor: 'blue',
    assignedTo: [],
    deadline: 'februar',
    prio: 'urgent',
    subtasks: [],
}

let subtasks = ['create new logo', 'finish'];
let categorys = [];



function toggleDropdown() {
    const dropdownArrow = document.querySelector('#category-input span');
    const selection = document.querySelector('.item-selection');
    if (selection.classList.contains('active')) {
        selection.classList.remove('active');
        dropdownArrow.classList.remove('active-arrow');
    } else {
        selection.classList.add('active');
        dropdownArrow.classList.add('active-arrow');
    }
}

function chosenCategory(value) {
    let dropdownContent = document.getElementById('category-input');
    dropdownContent.innerHTML = `${value}<span class="active-dropdown">&lt;</span>`;
    dropdownContent.classList.add('cat-picked');
    toggleDropdown();
}

function toggleAssigning() {
    const dropdownArrow = document.querySelector('#contacts-input span');
    const selection = document.querySelector('.contacts-selection');
    if (selection.classList.contains('active')) {
        selection.classList.remove('active');
        dropdownArrow.classList.remove('active-arrow');
    } else {
        selection.classList.add('active');
        dropdownArrow.classList.add('active-arrow');
    }
}

function changeFormIcons(formElement) {
    if (formElement === 'subtask') {
        let btns = document.querySelector('.addTaskBtns');
        btns.classList.remove('d-none');
        let inputHolder = document.querySelector('#subtask-placeholder');
        inputHolder.classList.add('d-none');
        let subtaskInput = document.querySelector('.subtask-input');
        subtaskInput.classList.remove('d-none');
        subtaskInput.focus();
    } else if (formElement === 'contact') {
        toggleAssigning();
        let plus = document.querySelector('#subtask-placeholder span');
        plus.classList.add('d-none');
        let btns = document.querySelector('.addTaskBtns');
        btns.classList.remove('d-none');
        let inputHolder = document.querySelector('#subtask-placeholder');
        inputHolder.classList.add('d-none');
        let subtaskInput = document.querySelector('.subtask-input');
        subtaskInput.classList.remove('d-none');
        subtaskInput.focus();
    }
}

function cancelInput(formElement) {
    if (formElement == 'subtask') {
        let plus = document.querySelector('#subtask-placeholder span');
        plus.classList.remove('d-none');
        let btns = document.querySelector('.addTaskBtns');
        btns.classList.add('d-none');
        let inputHolder = document.querySelector('#subtask-placeholder');
        inputHolder.classList.remove('d-none');
        let subtaskInput = document.querySelector('.subtask-input');
        subtaskInput.classList.add('d-none');
    } else if (formElement === 'contact') {
        let placeholder = document.getElementById('contacts-input');
        let input = document.querySelector('.inviteContactInput');
        let buttons = document.querySelector('.inviteContactBtn');

        placeholder.classList.remove('d-none');
        input.classList.add('d-none');
        buttons.classList.add('d-none');
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

function inviteContact() {
    toggleAssigning();
    let placeholder = document.getElementById('contacts-input');
    let input = document.querySelector('.inviteContactInput');
    let buttons = document.querySelector('.inviteContactBtn');

    placeholder.classList.add('d-none');
    input.classList.remove('d-none');
    buttons.classList.remove('d-none');
}