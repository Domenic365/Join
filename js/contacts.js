let contacts = new ContactList();

function contactDivider(letter) {
  return contactDivider = /*html*/`
    <div class="contactDivider">
      <p>${letter}</p>
      <div class="divisonLine"></div>
    </div>
  `
}

function loadContactHTML(contact) {
  return /*html*/ `
  <div class="contactCard">
    <div class="ContactImage">${contact.firstLetters}</div>
    <div class="contactData">
      <p>${contact.firstName} ${contact.secondName}</p>
      <p>${contact.email}</p>
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
        if (lastContactData.sortingLetter == currentContactData.sortingLetter) {
        
        }
      } else {
      }
      contactlist.innerHTML += loadContactHTML(currentContactData);
    }
}