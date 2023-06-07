let contacts = [
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
  contacts.forEach(contact => {
    contactlist.innerHTML += /*html*/`
        <p>${contact.firstName} ${contact.secondName}</p>
    `
  });
}
