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
        this.getFirstLetters();
        this.getSortingLetter();
    }

    getFirstLetters() {
        let positionOfSecondname = this.name.indexOf(" ");
        let letterOfFirstname = this.name.slice(0, 1).toUpperCase();
        let letterOfSecondname = this.name
            .slice(positionOfSecondname + 1, positionOfSecondname + 2)
            .toUpperCase();
        this.firstLetters = letterOfFirstname + letterOfSecondname;
    }

    getSortingLetter(){
        this.sortingLetter = this.name.slice(0, 1).toUpperCase();
    }
}
