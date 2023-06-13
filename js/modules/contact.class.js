class Contact {
    name;
    email;
    phone;
    firstLetters;
    sortingLetter;

    /**
     *
     * @param {string} firstName
     * @param {string} secondName
     * @param {string} email
     * @param {number} phone
     */
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.firstLetters = this.getFirstLetters();
        this.sortingLetter = this.name.slice(0, 1);
    }

    getFirstLetters() {
        let positionOfSecondname = this.name.indexOf(" ");
        let letterOfFirstname = this.name.slice(0, 1).toUpperCase();
        let letterOfSecondname = this.name
            .slice(positionOfSecondname + 1, positionOfSecondname + 2)
            .toUpperCase();
        return letterOfFirstname + letterOfSecondname;
    }
}
