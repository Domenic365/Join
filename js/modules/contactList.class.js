class ContactList {
    contactList = [
        new Contact(
            "Rainer",
            "Winkler",
            "rainerwinkler@gmail.com",
            "017626548632"
        ),
        new Contact(
            "Sabine",
            "Müller",
            "sabinemueller@gmail.com",
            "017834568973"
        ),
        new Contact(
            "Hans",
            "Schmidt",
            "hansschmidt@gmail.com",
            "017456879845"
        ),
        new Contact(
            "Annette",
            "Kohl",
            "annettekohl@gmail.com",
            "017754362881"
        ),
        new Contact(
            "Lukas",
            "Braun",
            "lukasbraun@gmail.com",
            "017843562893"
        ),
        new Contact(
            "Sandra",
            "Kaiser",
            "sandrakaiser@gmail.com",
            "017943562874"
        ),
        new Contact(
            "Markus",
            "Weber",
            "markusweber@gmail.com",
            "017543672894"
        ),
        new Contact(
            "Isabella",
            "Fischer",
            "isabellafischer@gmail.com",
            "017234567894"
        ),
        new Contact(
            "Jan",
            "Wolf",
            "janwolf@gmail.com",
            "017732465798"
        ),
        new Contact(
            "Julia",
            "Schneider",
            "juliaschneider@gmail.com",
            "017878932546"
        )
    ];

    constructor() {
        this.sortContacts();
    }

    sortContacts() {
        this.contactList.sort((a, b) => {
            let x = a.firstName.toLowerCase();
            let y = b.firstName.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          })
    }
}

