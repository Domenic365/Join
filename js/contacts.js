let contacts = new ContactList();

/**
 *
 * @param {string} letter the letter for the section
 * @returns returns the html for the letter section
 */
function contactDivider(letter) {
    return /*html*/ `
    <div class="framge84">
        <div class="contactDividerLetter">${letter}</div>
    </div>
    <div class="frame83">
        <div class="contactDividerVector"></div>
    </div>
  `;
}

/**
 *
 * @param {Contact} contact
 * @param {number} currentContact
 * @returns the html for one contactCard
 */
function loadContactHTML(contact, currentContact) {
    return /*html*/ `
    <div onclick="loadSingleContact(${currentContact})" class="frame97">
        <div class="frame79">
                <div class="AM"> ${contact.firstLetters}</div>
        </div>
        <div class="frame81">
                <div class="contactCardName">${contact.firstName} ${contact.secondName}</div>
                <div class="contactCardEmail">${contact.email}</div>
        </div>
    </div>
  `;
}

/**
 * the function for the first load
 */
async function loadContacts() {
    await changeContentHTML("../../assets/templates/contacts.html");
    loadContactCards();
}

/**
 * loading all contact cards
 */
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
        loadLetterSection(lastContactData, currentContactData, contactlist);
        contactlist.innerHTML += loadContactHTML(
            currentContactData,
            currentContact
        );
    }
}

/**
 *
 * @param {Contact} lastContactData
 * @param {Contact} currentContactData
 * @param {HTMLElement} contactlist the HTML Element where to insert the letter section
 */
function loadLetterSection(lastContactData, currentContactData, contactlist) {
    if (lastContactData) {
        if (lastContactData.sortingLetter != currentContactData.sortingLetter) {
            contactlist.innerHTML += contactDivider(
                currentContactData.sortingLetter
            );
        }
    } else {
        contactlist.innerHTML += contactDivider("A");
    }
}

/**
 *
 * @param {number} contactNumber the position in the array after sorting
 */
function loadSingleContact(contactNumber) {
    let contact = contacts.contactList[contactNumber];
    let contactArray = createContactArray(contact);
    contactArray.forEach((valueForHTML) => {
        insertIntoHTML(valueForHTML.id, valueForHTML.htmlValue);
    });
}

/**
 *
 * @param {Contact} contact
 * @returns the html data to open the contact details
 */
function createContactArray(contact) {
    return (openContactDetails = [
        { id: "contactInformation", htmlValue: "Contact Information" },
        { id: "editContact", htmlValue: "Edit Contact" },
        { id: "firstLetters", htmlValue: contact.firstLetters },
        {
            id: "contactName",
            htmlValue: contact.firstName + " " + contact.secondName,
        },
        { id: "contactEmail", htmlValue: contact.email },
        { id: "contactPhone", htmlValue: contact.phone },
    ]);
}

/**
 *
 * @param {string} id of the html element to edit
 * @param {string} innerOfHTML, the value to edit
 */
function insertIntoHTML(id, innerOfHTML) {
    document.getElementById(id).innerHTML = innerOfHTML;
}

/**
 * displays the modal
 */
function showContactModal() {
    document.getElementById("divForAddContact").classList.remove("dpNone");
}

/**
 *
 * @param {event} event to prevent reload
 */
function addNewContact(event) {
    event.preventDefault();
    let firstName = document.getElementById("newContactFirstName").value;
    let secondName = document.getElementById("newContactSecondName").value;
    let phone = document.getElementById("newContactPhone").value;
    let email = document.getElementById("newContactEmail").value;
    contacts.contactList.push(new Contact(firstName, secondName, email, phone));
    updateContacts();
    document.getElementById("divForAddContact").classList.add("dpNone");
}

/**
 * using this instead init prevents deleting added contacts
 */
function updateContacts() {
    contacts.sortContacts();
    loadContactCards();
}
