/**global variables */

let selectedContact = new Contact("", "", "");
let contacts = new ContactList();
let contactDetails = new ContactDetails();

async function loadContactContainer() {
    updateContacts();
    await changeContentHTML("../templates/contacts.html");
    let contactListContainer = document.querySelector("[contact-list]");
    let contactDetailsContainer = document.querySelector("[contact-details]");

    contactListContainer.appendChild(contacts);
    contactDetailsContainer.appendChild(contactDetails);
}

async function updateContacts() {
    await contacts.loadFromRemoteStorage();
    contacts.loadContactsToHTML();
}