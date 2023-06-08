class Contact {
    firstName;
    secondName;
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
    constructor(firstName, secondName, email, phone) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.phone = phone;
        this.firstLetters = this.getFirstLetters();
        this.sortingLetter = this.firstName.slice(0, 1);
    }

    getFirstLetters() {
        return this.firstName.slice(0, 1) + this.secondName.slice(0, 1);
    }
}
