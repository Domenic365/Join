class Contact {
  firstName;
  secondName;
  email;
  phone;
  firstLetters;

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
    this.firstLetters = getFirstLetters();
  }

  getFirstLetters(){
    
  }
}
