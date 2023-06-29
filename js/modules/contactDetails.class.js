class ContactDetails extends HTMLElement {
    /**HTML data*/
    firstRow = document.createElement("div");
    nameAndTaskContainer = document.createElement("div");
    addTask = document.createElement("img");
    secondRow = document.createElement("div");
    thirdRow = document.createElement("div");

    /**contact Data*/
    contactlist = document.querySelector("contact-list");

    constructor() {
        super();
        this.loadRows();
        this.loadCSS();
        this.loadContact();
        this.loadValues();
        this.loadHover();
    }

    //loading functions

    loadRows() {
        this.appendChild(this.firstRow);
        this.firstRow.appendChild(this.nameAndTaskContainer);
        this.appendChild(this.secondRow);
        this.appendChild(this.thirdRow);
    }

    loadValues() {
        this.addTask.src = "../../assets/img/icons/contact/addTask.svg";
    }

    loadCSS() {
        this.firstRow.classList.add("firstRow");
        this.addTask.classList.add("addTask");
    }

    loadContact() {
        let cloneOfSelectedContact = selectedContact.cloneNode(true);
        let firstLetters = cloneOfSelectedContact.firstChild;
        let firstLettersPosition = this.firstRow.children[0];
        this.firstRow.insertBefore(firstLetters, firstLettersPosition);
        let name = cloneOfSelectedContact.firstChild.firstChild;
        this.nameAndTaskContainer.appendChild(name);
        this.firstRow.children[1].appendChild(this.addTask);
    }

    loadHover() {
        this.addTaskHover(this.addTask, "addTask");
    }

    //other functions

    addTaskHover(element, name) {
        element.addEventListener("mouseover", (e) => {
            e.target.src = `../../assets/img/icons/contact/${name}Hover.svg`;
        });

        element.addEventListener("mouseleave", (e) => {
            e.target.src = `../../assets/img/icons/contact/${name}.svg`;
        });
    }
}

customElements.define("contact-details", ContactDetails);
