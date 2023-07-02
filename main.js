"use strict";

async function init() {
    await includeHTML();
    await updateContacts();
    loadOutsideClickForModal();
}

function showModal() {
    const modal = document.querySelector("dialog");
    modal.showModal();
}

function closeModal() {
    const modal = document.querySelector("dialog");
    modal.close();
}

function loadOutsideClickForModal() {
    let dialog = document.querySelector("dialog");
    dialog.addEventListener("click", (e) => {
        const dialogDimensions = dialog.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            dialog.close();
        }
    });
}


function addContact(e) {
    e.preventDefault();
    console.log(e)
}