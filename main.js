"use strict";

async function init() {
    await includeHTML();
    await updateContacts();
    loadOutsideClickForModal();
}

async function switchModal(modalLink) {
    const modal = document.querySelector("dialog");
    if (modalLink) {
        
    }
    if (modal.open) {
        modal.close();
    } else {
        modal.showModal();
    }
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
