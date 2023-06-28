class ContactDetails extends HTMLElement{
    /**HTML data*/
    firstRow = document.createElement("div");
    secondRow = document.createElement("div");
    thirdRow = document.createElement("div");

    /**contact Data*/
    contactlist =  document.querySelector("contact-list");

    constructor(){
        super();
        this.loadRows();
        this.loadContact();
    }

    loadRows(){
        this.appendChild(this.firstRow);
        this.appendChild(this.secondRow);
        this.appendChild(this.thirdRow);
    }

    loadContact(){
        let cloneOfSelectedContact = selectedContact.cloneNode(true);
        let firstLetters = cloneOfSelectedContact.firstChild;
        this.firstRow.appendChild(firstLetters);
    }
}

customElements.define("contact-details", ContactDetails)