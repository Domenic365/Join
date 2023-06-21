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
        <div style="background-color: ${contact.color};" class="frame79">
                <div class="AM"> ${contact.firstLetters}</div>
        </div>
        <div class="frame81">
                <div class="contactCardName">${contact.name}</div>
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
    if (
        lastContactData === undefined ||
        (lastContactData &&
            lastContactData.sortingLetter !== currentContactData.sortingLetter)
    ) {
        contactlist.innerHTML += contactDivider(
            currentContactData.sortingLetter
        );
    }
}

/**
 *
 * @param {number} contactNumber the position in the array after sorting
 */
function loadSingleContact(contactNumber) {
    let contact = contacts.contactList[contactNumber];
    let contactArray = createContactArray(contact);
    document
        .getElementById("editContacts")
        .setAttribute(
            "onclick",
            `showContactModal("editContact", ${contactNumber})`
        );
    document.getElementById("frame79").style.backgroundColor = contact.color;
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
            htmlValue: contact.name,
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
 *
 * @param {string} modalKind the name of modal to load
 * @returns the html data to edit in the modal
 */
function createModalArray(modalKind) {
    switch (modalKind) {
        case "addNewContact":
            return (moadlInfos = [
                { id: "addContactOverlay", htmlValue: "Add Contact" },
                {
                    id: "tasksAreBetterWithATeam",
                    htmlValue: "Tasks are better with a team!",
                },
                { id: "contactButtonName", htmlValue: "Create Contact" },
                {
                    id: "frame79OpenCard",
                    htmlValue:
                        '<img src="../img/icons/whiteHuman.svg" alt="human">',
                },
            ]);
        case "editContact":
            return (modalInfos = [
                { id: "addContactOverlay", htmlValue: "Edit Contact" },
                { id: "tasksAreBetterWithATeam", htmlValue: "" },
                { id: "contactButtonName", htmlValue: "Save" },
                {
                    id: "frame79OpenCard",
                    htmlValue:
                        '<div id="shortNameOpenCard" class="AM amBigNameAbbrevation"></div>',
                },
            ]);
        default:
            window.alert("Fehler im Modal Array");
            break;
    }
}

/**
 * displays the modal
 */
function showContactModal(modalKind, contactNumber) {
    debugger;
    let modalArray = createModalArray(modalKind);
    editContact(contactNumber); //-1 for clearing the input values
    modalArray.forEach((valueForHTML) => {
        insertIntoHTML(valueForHTML.id, valueForHTML.htmlValue);
    });
    if (modalKind === "editContact") {
        document.getElementById("shortNameOpenCard").innerHTML =
            contacts.contactList[contactNumber].firstLetters;
    }
    document.getElementById("forCenterOverlay").classList.remove("dpNone");
}

/**
 *
 * @param {event} event to prevent close on everything
 */
function closeContactModal() {
    document.getElementById("forCenterOverlay").classList.add("dpNone");
}

/**
 *
 * @param {event} event to prevent reload
 */
function addNewContact(event) {
    event.preventDefault();
    let name = document.getElementById("newContactName").value;
    let phone = document.getElementById("newContactPhone").value;
    let email = document.getElementById("newContactMail").value;
    contacts.contactList.push(new Contact(name, email, phone));
    updateContacts();
    document.getElementById("forCenterOverlay").classList.add("dpNone");
}

/**
 * using this instead init prevents deleting added contacts
 */
function updateContacts() {
    contacts.sortContacts();
    loadContactCards();
}

/**
 *
 * @param {number} contactNumber the position in the contacts list
 */
function editContact(contactNumber) {
    let contact = contacts.contactList[contactNumber];
    let contactInputValues;
    let clearInputs = -1;
    let contactInputIds = createInputIdArray();
    if (contactNumber == clearInputs) {
        contactInputValues = ["", "", ""];
        changeOnClickInButton(`addNewContact(event)`);
        document.getElementById("frame79OpenCard").style.backgroundColor =
            "#d1d1d1";
    } else {
        contactInputValues = [contact.name, contact.phone, contact.email];
        changeOnClickInButton(`saveContact(${contactNumber})`);
        document.getElementById("frame79OpenCard").style.backgroundColor =
            contact.color;
    }
    editInputValues(contactInputValues, contactInputIds);
}

/**
 *
 * @param {Array} contactInputValues
 * @param {Array} contactInputIds
 */
function editInputValues(contactInputValues, contactInputIds) {
    for (let input = 0; input < contactInputValues.length; input++) {
        const contactValue = contactInputValues[input];
        const inputId = contactInputIds[input];
        document.getElementById(inputId).value = contactValue;
    }
}

function createInputIdArray() {
    return ["newContactName", "newContactPhone", "newContactMail"];
}

/**
 *
 * @param {Number} contactNumber the position in the contacts list
 */
function saveContact(contactNumber) {
    let contact = contacts.contactList[contactNumber];
    let inputIds = createInputIdArray();
    contact.name = document.getElementById(inputIds[0]).value;
    contact.phone = document.getElementById(inputIds[1]).value;
    contact.email = document.getElementById(inputIds[2]).value;
    contact.getFirstLetters();
    contact.getSortingLetter();
    closeContactModal();
    updateContacts();
    loadSingleContact(contactNumber);
}

/**
 *
 * @param {String} method the method to execute if the black button of modal is clicked
 */
function changeOnClickInButton(method) {
    document.getElementById("contactButton").setAttribute("onclick", method);
}
