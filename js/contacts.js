/**global variables */

let selectedContact = new Contact("", "", "");
let contacts = new ContactList();
let contactDetails = new ContactDetails();

async function loadContactContainer() {
    updateContacts();
    await changeContentHTML("../templates/contacts.html");
    insertContactHTML();
}

function insertContactHTML() {
    let contactListContainer = document.querySelector("[contact-list]");
    let contactDetailsContainer = document.querySelector("[contact-details]");

    contactListContainer.appendChild(contacts);
    contactDetailsContainer.appendChild(contactDetails);
}

async function updateContacts() {
    await contacts.loadFromRemoteStorage();
    contacts.sortContacts();
    contacts.loadContactsToHTML();
}

function addContact(event) {
    event.preventDefault();
    debugger;
    let name = event.target[0].value;
    let phone = event.target[1].value;
    let email = event.target[2].value;

    contacts.addContact(name, email, phone);
    updateContacts();
}