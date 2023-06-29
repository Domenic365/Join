class ContactDetails extends HTMLElement {
    /**HTML data*/
    firstRow = document.createElement("div");
    nameAndTaskContainer = document.createElement("div");
    addTask = document.createElement("img");

    secondRow = document.createElement("div");
    editContact = document.createElement("img")

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
        this.appendChild(this.secondRow);
        this.appendChild(this.thirdRow);
    }

    loadValues() {
        this.addTask.src = "../../assets/img/icons/contact/addTask.svg";
        this.editContact.src = "../../assets/img/icons/contact/editContact.svg"
    }

    loadCSS() {
        this.firstRow.classList.add("firstRow");
        this.addTask.classList.add("imageButtons");
        this.editContact.classList.add("imageButtons")
    }

    loadContact() {
        let cloneOfSelectedContact = selectedContact.cloneNode(true);

        //firstLetters
        let firstLetters = cloneOfSelectedContact.firstChild;
        this.firstRow.appendChild(firstLetters);
        this.firstRow.appendChild(this.nameAndTaskContainer);

        //name and addtask
        let name = cloneOfSelectedContact.firstChild.firstChild;
        this.nameAndTaskContainer.appendChild(name);
        this.firstRow.children[1].appendChild(this.addTask);

        //secondRow
        this.secondRow.innerText = "Contact Information";
        this.secondRow.appendChild(this.editContact);

        //thirdRow
        this.thirdRow.innerText += "Email";
        this.thirdRow.innerText += "Phone";
    }

    loadHover() {
        this.elementHover(this.addTask, "addTask");
        this.elementHover(this.editContact, "editContact")
    }

    //other functions

    elementHover(element, name) {
        element.addEventListener("mouseover", (e) => {
            e.target.src = `../../assets/img/icons/contact/${name}Hover.svg`;
        });

        element.addEventListener("mouseleave", (e) => {
            e.target.src = `../../assets/img/icons/contact/${name}.svg`;
        });
    }
}

customElements.define("contact-details", ContactDetails);
