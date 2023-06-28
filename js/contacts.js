let contacts;
let contactDetails;

customElements.define("contactList", ContactList);

async function contactsInit() {
    await changeContentHTML("../templates/contacts.html");
    contacts = new ContactList();
}
