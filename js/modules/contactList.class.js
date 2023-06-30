class ContactList extends HTMLElement {
    contactList = [
    ];

    lastSortingLetter;

    constructor() {
        super();

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
        await setItem("contactList", JSON.stringify(this.contactList));
    }

    async loadFromRemoteStorage() {
        let res = await getItem("contactList");
        this.contactList = JSON.parse(res);
    }
}

customElements.define("contact-list", ContactList);
