class AddressBook {
    firstname;
    lastname;
    address;
    city;
    state;
    zipcode;
    phoneNumber;
    emailId;

    constructor(...parameters) {
        this.firstname = parameters[0];
        this.lastname = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipcode = parameters[5];
        this.phoneNumber = parameters[6];
        this.emailId = parameters[7];
    }

    toString() {
        return "firstname= " + this.firstname + ", lastname = " + this.lastname + ", address = " + this.address +
            ", city = " + this.city + ", state = " + this.state + ", zipcode = " + this.zipcode +
            ", phoneNumber = " + this.phoneNumber + ", emailId = " + this.emailId;
    }
}

const addressBook = new AddressBook("Mark", "Wood", "West hill", "Missouri", "California", "10024", "5690125689", "mark@orkut.com");
console.log("AddressBook: " + addressBook.toString());