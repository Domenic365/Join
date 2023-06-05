"use strict";

function initLogin() {
    setTimeout(() => {
        let logo = document.querySelector('.logoStart');
        logo.classList.remove('logoStart');
        logo.classList.add('logomotion');
    }, 1000);
    loadForm();
}

function loadForm() {
    
}