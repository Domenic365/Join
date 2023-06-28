class Contact {
    /**contact data */
    name;
    email;
    phone;
    firstLetters;
    sortingLetter;
    color;
    colors = [
        "#FF7A00",
        "#9327FF",
        "#29ABE2",
        "#FC71FF",
        "#02CF2F",
        "#AF1616",
        "#462F8A",
    ];

    /**html elements */
    firstLettersHTML = document.createElement("div");
    divForNameAndEmail = document.createElement("div");
    nameHTML = document.createElement("div");
    emailHTML = document.createElement("div");

    /**
     *
     * @param {string} firstName
     * @param {string} secondName
     * @param {string} email
     * @param {number} phone
     */
    constructor(name, email, phone) {
        super();
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.getFirstLetters();
        this.getSortingLetter();
        this.getColor();
        this.loadContactHTML();
        this.loadCSSClasses();
    }

    getFirstLetters() {
        let positionOfSecondname = this.name.indexOf(" ");
        let letterOfFirstname = this.name.slice(0, 1).toUpperCase();
        let letterOfSecondname = this.name
            .slice(positionOfSecondname + 1, positionOfSecondname + 2)
            .toUpperCase();
        this.firstLetters = letterOfFirstname + letterOfSecondname;
    }

    getSortingLetter() {
        this.sortingLetter = this.name.slice(0, 1).toUpperCase();
    }

    getColor() {
        let colorNumber = Math.floor(Math.random() * 7);
        this.color = this.colors[colorNumber];
    }

    loadContactHTML() {
        this.htmlElement.appendChild(this.firstLettersHTML);
        this.htmlElement.appendChild(this.divForNameAndEmail);
        this.divForNameAndEmail.appendChild(this.nameHTML);
        this.divForNameAndEmail.appendChild(this.emailHTML);
    }

    loadCSSClasses() {
        this.htmlElement.classList.add("contactCard");
        this.firstLettersHTML.classList.add("ContactCardfirstLetters");
        this.divForNameAndEmail.classList.add("ContactCarddivForNameAndEmail");
        this.nameHTML.classList.add("contactCardName");
        this.emailHTML.classList.add("contactCardEmail");
    }
}
