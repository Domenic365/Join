class ContactDetails extends HTMLElement {
    /**contact Data*/
    cloneOfSelectedContact = selectedContact.cloneNode(true);
    firstLetters = this.cloneOfSelectedContact.firstChild;
    name = this.cloneOfSelectedContact.children[1].firstChild;
    email = this.cloneOfSelectedContact.children[1].children[1];

    /**HTML data*/
    title = document.createElement("img");

    firstRow = document.createElement("div");
    nameAndTaskContainer = document.createElement("div");
    addTask = document.createElement("img");

    secondRow = document.createElement("div");
    editContact = document.createElement("img");

    thirdRow = document.createElement("div");
    phone = document.createElement("a");

    constructor() {
        super();
        this.appendChild(this.title);
        this.title.src =
            "../../assets/img/icons/contact/contactDetailsTitle.svg";
    }

    //loading functions

    updateContact() {
        this.clearHTML();
        this.reloadContactData();
        this.loadRows();
        this.loadCSS();
        this.loadContact();
        this.loadValues();
        this.loadHover();
    }

    clearHTML() {
        this.firstRow.innerHTML = "";
        this.name.innerHTML = "";
        this.thirdRow.innerHTML = "";
    }

    reloadContactData() {
        this.cloneOfSelectedContact = selectedContact.cloneNode(true);
        this.firstLetters = this.cloneOfSelectedContact.firstChild;
        this.name = this.cloneOfSelectedContact.children[1].firstChild;
        this.email = this.cloneOfSelectedContact.children[1].children[1];
    }

    loadRows() {
        this.appendChild(this.firstRow);
        this.appendChild(this.secondRow);
        this.appendChild(this.thirdRow);
    }

    loadValues() {
        this.addTask.src = "../../assets/img/icons/contact/addTask.svg";
        this.editContact.src = "../../assets/img/icons/contact/editContact.svg";
        this.phone.innerHTML = selectedContact.phone;
        this.phone.href = /*html*/ `tel:${selectedContact.phone}`;
        this.editContact.addEventListener("click", openEditContact);
    }

    loadCSS() {
        this.firstRow.classList.add("firstRow");
        this.addTask.classList.add("imageButtons");
        this.editContact.classList.add("imageButtons");
        this.secondRow.classList.add("secondRow");
        this.thirdRow.classList.add("thirdRow");
        this.phone.classList.add("contactDetailsPhone");
        this.firstLetters.classList.add("contactDetailsFirstLetters");
        this.name.classList.add("contactDetailsName");
        this.nameAndTaskContainer.classList.add("nameAndTaskContainer");
    }

    loadContact() {
        //firstLetters
        this.firstRow.appendChild(this.firstLetters);
        this.firstRow.appendChild(this.nameAndTaskContainer);

        //name and addtask
        this.nameAndTaskContainer.appendChild(this.name);
        this.firstRow.children[1].appendChild(this.addTask);

        //secondRow
        this.secondRow.innerText = "Contact Information";
        this.secondRow.appendChild(this.editContact);

        //thirdRow
        this.thirdRow.innerHTML += "Email";
        this.thirdRow.appendChild(this.email);
        this.thirdRow.innerHTML += "Phone";
        this.thirdRow.appendChild(this.phone);
    }

    loadHover() {
        this.elementHover(this.addTask, "addTask");
        this.elementHover(this.editContact, "editContact");
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
