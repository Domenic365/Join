"use strict";
let allTasks = []

let categorys = [
    {
        name: 'Marketing',
        color: 'purple'
    },
    {
        name: 'Sales',
        color: 'red'
    },
    {
        name: 'Development',
        color: 'blue'
    },
    {
        name: 'Accounting',
        color: 'pink'
    },
]


function createNewTask() {
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
    })
    console.log(allTasks);
}

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

function renderCategorys() {
    let catContainer = document.getElementById('category-selection');
    
    catContainer.innerHTML = '<li onclick="createCategory()">Add new category</li>';
    for (let i = 0; i<categorys.length; i++) {
        catContainer.innerHTML += `
            <li onclick="chosenCategory('${categorys[i].name}')">${categorys[i].name}<div class="${categorys[i].color}"></div></li>
        `
    }
}

function toggleDropdown() {
    renderCategorys();
    const dropdownArrow = document.querySelector('#category-input span');
    const selection = document.querySelector('.item-selection');
    const layer = document.getElementById('layerForCats');
    if (selection.classList.contains('active')) {
        selection.classList.remove('active');
        dropdownArrow.classList.remove('active-arrow');
        layer.classList.add('d-none');
    } else {
        selection.classList.add('active');
        dropdownArrow.classList.add('active-arrow');
        layer.classList.remove('d-none');
    }
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

function toggleAssigning() {
    const dropdownArrow = document.querySelector('#contacts-input span');
    const selection = document.querySelector('.contacts-selection');
    const layer = document.getElementById('layerForContactDD');
    if (selection.classList.contains('active')) {
        selection.classList.remove('active');
        dropdownArrow.classList.remove('active-arrow');
        layer.classList.add('d-none');
    } else {
        selection.classList.add('active');
        dropdownArrow.classList.add('active-arrow');
        layer.classList.remove('d-none');
    }
    // renderContacts();
}

function renderContacts() {
    let list = document.getElementById('contact-selection');
    list.innerHTML = '';
    for (let i = 0; i<contactList.length; i++) {
        const contact = contactList[i];
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
        input.value = '';
    } else if (formElement === 'cat') {
        let placeholder = document.getElementById('category-input');
        let input = document.querySelector('.addCategoryInput');
        let buttons = document.querySelector('.createCatBtn');
        let colorPicker = document.querySelector('.category-colors');
        let contactDD = document.querySelector('.contact-dropdown');
        contactDD.classList.remove('m-top');
        placeholder.classList.remove('d-none');
        input.classList.add('d-none');
        buttons.classList.add('d-none');
        colorPicker.classList.add('d-none');
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
    input.focus();
}

function createCategory() {
    toggleDropdown();
    let placeholder = document.getElementById('category-input');
    let input = document.querySelector('.addCategoryInput');
    let buttons = document.querySelector('.createCatBtn');
    let colorPicker = document.querySelector('.category-colors');
    let contactDD = document.querySelector('.contact-dropdown');
    placeholder.classList.add('d-none');
    contactDD.classList.add('m-top');
    input.classList.remove('d-none');
    buttons.classList.remove('d-none');
    colorPicker.classList.remove('d-none');
    input.focus();
}

function pickCatColor(color) {
    let colorlist = document.querySelectorAll('.category-colors div')
    for (let i = 0; i<colorlist.length; i++) {
        colorlist[i].classList.remove('selectedColor');
    }
    
    let pickedColor = document.querySelector(`.${color}`);
    pickedColor.classList.add('selectedColor');
}

function saveNewCat() {
    let contactDD = document.querySelector('.contact-dropdown');
    let catTitle = document.querySelector('.addCategoryInput').value;
    let catColor = document.querySelector('.selectedColor').classList[0];
    let newCategory = {
        name : catTitle,
        color : catColor
    }
    categorys.push(newCategory);
    contactDD.classList.remove('m-top');
    renderCategorys();
    showNewCat();
    cancelInput('cat');
}

function showNewCat() {
    let element = categorys[categorys.length -1];
    let placeholder = document.getElementById('category-input');
    placeholder.innerHTML = `
    <div class="">${element.name}<div class="${element.color}"></div></div><span class="active-arrow">&lt;</span>
    `
    placeholder.classList.add('cat-picked');
}

function pickPrio(pick) {
    resetPrio();
    let button = document.querySelector(`.${pick}`);
    
    if (button.classList.contains('activePick')) {
        resetPrio();
    } else {
        switch (pick) {
            case 'urgent':
                button.classList.add('activeUrgent');
                button.classList.add('activePick');
                break;
            case 'medium':
                button.classList.add('activeMedium');
                button.classList.add('activePick');
            break;
            case 'low':
                button.classList.add('activeLow');
                button.classList.add('activePick');
                break;
        }
    }
}

function resetPrio() {
    let urgent = document.querySelector('.prio-buttons .urgent');
    let medium = document.querySelector('.prio-buttons .medium');
    let low = document.querySelector('.prio-buttons .low');
    urgent.classList = 'urgent';
    medium.classList = 'medium';
    low.classList = 'low';
}

function dateColor() {
    document.querySelector('#due-date').style.color = "black";
}

function clearAll() {
    let title = document.getElementById('title-input');
    let description = document.getElementById('description'); 
    let category = document.getElementById('category-input');
    let contactlist = document.querySelectorAll('.dropdown-check');
    let date = document.getElementById('due-date');
    let tasklist = document.querySelector('.subtask-list');
    title.value = '';
    description.value = '';
    tasklist.innerHTML = '';
    date.value = '';
    date.style.color = '';
    resetPrio();
    category.innerHTML = 'Choose Category<span>&lt;</span>';
    clearContacts(contactlist);
    resetValidation();
}

function clearContacts(contactlist) {
    contactlist.forEach(element => {
        element.checked = false;
    });
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