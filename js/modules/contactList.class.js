class ContactList extends HTMLElement {
    contactList = [];

    lastSortingLetter;

    constructor() {
        super();
        this.sortContacts();
        this.loadContactsToHTML();
    }

    sortContacts() {
        this.contactList.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    }

    loadContactsToHTML() {
        this.contactList.forEach((contact) => {
            this.appendChild(contact);
        });
    }

    async saveToRemoteStorage() {
        let contactListForStorage = [];
        this.contactList.forEach((contact) => {
            let contactForStorage = {
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
            };
            contactListForStorage.push(contactForStorage);
        });
        console.log(contactListForStorage);
        await setItem("contactList", JSON.stringify(contactListForStorage));
    }

    async loadFromRemoteStorage() {
        let res = await getItem("contactList");
        let contactListFromStorage = JSON.parse(res);
        this.contactList = [];
        contactListFromStorage.forEach((contact) => {
            this.contactList.push(
                new Contact(contact.name, contact.email, contact.phone)
            );
        });
    }
}

customElements.define("contact-list", ContactList);