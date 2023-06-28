let contacts;
let contactDetails;

async function contactsInit() {
    await changeContentHTML("../templates/contacts.html");
    contacts = new ContactList();
    contactDetails = new ContactDetails();
}
