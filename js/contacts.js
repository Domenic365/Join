let contacts = [
    new Contact(
        "Bastian",
        "Hochfels",
        "bastian.hochfels@gmail.com",
        "017658468531"
    ),
    new Contact(
        "Bastian",
        "Hochfels",
        "bastian.hochfels@gmail.com",
        "017658468531"
    ),
    new Contact(
        "Bastian",
        "Hochfels",
        "bastian.hochfels@gmail.com",
        "017658468531"
    ),
    new Contact(
        "Bastian",
        "Hochfels",
        "bastian.hochfels@gmail.com",
        "017658468531"
    ),
];

async function loadContacts() {
    await changeContentHTML("assets/templates/contacts.html");
    let contactlist = document.getElementById("contacts");
    contactlist.innerHTML = "";
    contacts.forEach((contact) => {
        contactlist.innerHTML += /*html*/ `
    <div class="contactCard">
      <div class="ContactImage"></div>
      <div class="contactData">
        <p>${contact.firstName} ${contact.secondName}</p>
        <p>${contact.email}</p>
      </div>
    </div>

    `;
    });
}
