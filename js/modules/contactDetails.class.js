class ContactDetails extends HTMLElement{
    /**HTML data */
    firstRow = document.createElement("div");
    secondRow = document.createElement("div");
    thirdRow = document.createElement("div");

    
    constructor(){
        super();
    }
}

customElements.define("contact-details", ContactDetails)