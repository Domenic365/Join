"use strict";

// TO DO: Erstellen eines Category Arrys, um hier die Liste der Kategorien zu erzeugen

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
    if (formElement == 'subtask') {
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