let contacts = new ContactList();

function contactDivider(letter) {
  return /*html*/`
    <div class="contactDivider">
        <p>${letter}</p>
      <div class="divisonLine"><div></div></div>
    </div>
  `
}

function loadContactHTML(contact, currentContact) {
  return /*html*/ `
  <div onclick="loadSingleContact(${currentContact})" class="contactCard">
    <div class="frame79"> ${contact.firstLetters}</div>
    <div class="contactData">
      <div>${contact.firstName} ${contact.secondName}</div>
      <div>${contact.email}</div>
    </div>
  </div>
  `;
}

async function loadContacts() {
    await changeContentHTML("../../assets/templates/contacts.html");
    let contactlist = document.getElementById("contacts");
    contactlist.innerHTML = "";
    for (let currentContact = 0; currentContact < contacts.contactList.length; currentContact++) {
      const lastContactData = contacts.contactList[currentContact - 1]
      const currentContactData = contacts.contactList[currentContact];
      if (lastContactData) {
        if (lastContactData.sortingLetter != currentContactData.sortingLetter) {
          contactlist.innerHTML += contactDivider(currentContactData.sortingLetter);
        }
      } else {
        contactlist.innerHTML += contactDivider("A");
      }
      contactlist.innerHTML += loadContactHTML(currentContactData, currentContact);
    }
}

function loadSingleContact(contactNumber) {
  
}