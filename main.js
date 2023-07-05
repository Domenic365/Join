"use strict";

/**
 * this funciton initializes/calls needed functions to render page content
 */
async function init() {
    await includeHTML();
    initSummary();
}

async function switchModal(modalLink, page) {
    const modal = document.querySelector("dialog");
    if (modalLink) {
        modal.setAttribute("w3-include-html", modalLink);
        await includeHTML();
    }
    if (page === "contact") {
        insertContactHTML();
    } else if (page === 'addtask') {
        let addTask = document.querySelector('.taskarea');
        let btn = document.querySelector('.mobile-close');
        if (addTask.classList.contains('modalView')) {
            addTask.classList.remove('modalView');
            btn.classList.add('d-none')
        } else {
            addTask.classList.add('modalView');
            btn.classList.remove('d-none');
        }
    }
    if (modal.open) {
        modal.close();
    } else {
        modal.showModal();
    }
    loadOutsideClickForModal();
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