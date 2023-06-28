class Contact extends HTMLElement{
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
}
