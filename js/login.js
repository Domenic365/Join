"use strict";

function initLogin() {
    setTimeout(() => {
        let logo = document.querySelector('.logoStart');
        logo.classList.remove('logoStart');
        logo.classList.add('logomotion');
    }, 1000);
    setTimeout(() => {
        loadForm()
    },1250);
}

function loadForm() {
    let container = document.getElementById('loginRender');
    container.classList.remove('d-none');
}