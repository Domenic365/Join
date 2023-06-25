"use strict";

let modal;
let openModalButton;
let closeModalButton;

async function init() {
    await includeHTML();
    modal = document.querySelector("[modal]");
    closeModalButton = document.querySelectorAll("[closeModalButton]");
    openModalButton = document.querySelector("[openModalButton]");
    loadEventlistener();
}

function loadEventlistener() {
    openModalButton.addEventListener("click", (e) => {
      modal.showModal();
    });
}
