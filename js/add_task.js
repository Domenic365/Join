"use strict";

const categoryDropdown = document.querySelector('.dropdown-category');
const selection = document.querySelector('.selection');
const dropArrow = document.querySelector('.drop-arrow');
const categoryList = document.querySelector('.category-list');
const options = document.querySelectorAll('.category-list li');
const selected = document.querySelector('.selected');

selection.addEventListener('click', () => {
    selection.classList.toggle('select-clicked');
    dropArrow.classList.toggle('arrow-rotate');
    categoryList.classList.toggle('selection-open');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        selected.classList.remove('select-clicked');
        dropArrow.classList.remove('arrow-rotate');
        selection.classList.remove('selection-open');
        options.forEach(option => {
            option.classList.remove('active');
        });
    });
});