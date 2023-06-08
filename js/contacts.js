async function loadContacts() {
<<<<<<< HEAD
    await changeContentHTML("../templates/contacts.html");
=======
    await changeContentHTML("../../assets/templates/contacts.html");
>>>>>>> dab0bb7ba9343b5819df2553c52dbf55b6679602
    let contactlist = document.getElementById("contacts");
    contactlist.innerHTML = "";
    contacts.forEach((contact) => {
        contactlist.innerHTML += /*html*/ `
    <div class="contactCard">
      <div class="ContactImage">${contact.firstLetters}</div>
      <div class="contactData">
        <p>${contact.firstName} ${contact.secondName}</p>
        <p>${contact.email}</p>
      </div>
    </div>

    `;
    });
}