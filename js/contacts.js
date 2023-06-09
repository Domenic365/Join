let contacts = new ContactList();

function contactDivider(letter) {
    return /*html*/ `
    <div class="contactDivider">
        <p>${letter}</p>
      <div class="divisonLine"><div></div></div>
    </div>
  `;
}

function loadContactHTML(contact, currentContact) {
    return /*html*/ `
  <div onclick="loadSingleContact(${currentContact})" class="contactCard">
    <div class="contactFirstLetters"> ${contact.firstLetters}</div>
    <div class="contactData">
      <div>${contact.firstName} ${contact.secondName}</div>
      <div>${contact.email}</div>
    </div>
  </div>
  `;
}

async function loadContacts() {
    await changeContentHTML("../../assets/templates/contacts.html");
    loadContactCards();

}

function loadContactCards() {
    let contactlist = document.getElementById("contacts");
    contactlist.innerHTML = "";
    for (
        let currentContact = 0;
        currentContact < contacts.contactList.length;
        currentContact++
    ) {
        const lastContactData = contacts.contactList[currentContact - 1];
        const currentContactData = contacts.contactList[currentContact];
        if (lastContactData) {
            if (
                lastContactData.sortingLetter !=
                currentContactData.sortingLetter
            ) {
                contactlist.innerHTML += contactDivider(
                    currentContactData.sortingLetter
                );
            }
        } else {
            contactlist.innerHTML += contactDivider("A");
        }
        contactlist.innerHTML += loadContactHTML(
            currentContactData,
            currentContact
        );
    }
}

function loadSingleContact(contactNumber) {
    let contact = contacts.contactList[contactNumber];
    document.getElementById("contactInformation").innerHTML =
        "Contact Information";
    document.getElementById("editContact").innerHTML = "Edit Contact";
    document.getElementById("firstLetters").innerHTML = contact.firstLetters;
    document.getElementById("contactName").innerHTML =
        contact.firstName + " " + contact.secondName;
    document.getElementById("contactEmail").innerHTML = contact.email;
    document.getElementById("contactPhone").innerHTML = contact.phone;
}

function showContactModal() {
    document.getElementById("divForAddContact").classList.remove("dpNone");
}

function addNewContact(event) {
    event.preventDefault();
    let firstName = document.getElementById("newContactFirstName").value;
    let secondName = document.getElementById("newContactSecondName").value;
    let phone = document.getElementById("newContactPhone").value;
    let email = document.getElementById("newContactEmail").value;
    contacts.contactList.push(new Contact(firstName, secondName, email, phone));
    updateContacts();
    document.getElementById("divForAddContact").classList.add("dpNone");
    return false;
}

function updateContacts() {
    contacts.sortContacts();
    loadContactCards();
}