class ContactList extends ContactHTMLTags {
    contactList = [
        new Contact(
            "Rainer Winkler",
            "rainerwinkler@gmail.com",
            "017626548632"
        ),
        new Contact("Anna Müller", "anna.mueller@example.com", "0123456789"),
        new Contact(
            "Max Mustermann",
            "max.mustermann@example.com",
            "9876543210"
        ),
        new Contact("Lena Schmidt", "lena.schmidt@example.com", "4567890123"),
        new Contact("Hans Meier", "hans.meier@example.com", "01234567895"),
        new Contact(
            "Julia Schneider",
            "julia.schneider@example.com",
            "01234567896"
        ),
        new Contact(
            "Fritz Fischer",
            "fritz.fischer@example.com",
            "01234567897"
        ),
        new Contact("Sabine Weber", "sabine.weber@example.com", "01234567898"),
        new Contact(
            "Michaela Wagner",
            "michaela.wagner@example.com",
            "01234567899"
        ),
        new Contact(
            "Martin Becker",
            "martin.becker@example.com",
            "012345678910"
        ),
        new Contact("Sarah Schulz", "sarah.schulz@example.com", "012345678911"),
        new Contact(
            "Thomas Keller",
            "thomas.keller@example.com",
            "012345678912"
        ),
        new Contact(
            "Melanie Schmitt",
            "melanie.schmitt@example.com",
            "012345678913"
        ),
        new Contact("Jan Petersen", "jan.petersen@example.com", "012345678914"),
        new Contact(
            "Carolin Krause",
            "carolin.krause@example.com",
            "012345678915"
        ),
    ];

    constructor() {
        super();
        this.sortContacts();
        this.addIntoHTML("contactlist");
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

    loadContactsToHTML(){
        this.contactList.forEach(contact => {
            this.htmlElement.appendChild(contact.htmlElement)
        });
    }
}