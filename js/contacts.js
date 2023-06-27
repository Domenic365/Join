let contacts;

async function contactsInit() {
    await changeContentHTML("../templates/contacts.html");
    contacts = new ContactList();
}
