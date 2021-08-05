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

    get firstname() {
        return this.firstname;
    }
    set firstname(firstname) {
        let pattern1 = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (pattern1.test(firstname))
            this._firstname = firstname;
        else throw 'FirstName is Incorrect';
    }

    get lastname() { return this._lastname; }
    set lastname(lastname) {
        let pattern2 = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (pattern2.test(lastname))
            this._lastname = lastname;
        else throw 'LastName is Incorrect!';
    }

    get address() { return this._address; }
    set address(address) {
        let pattern3 = RegExp('^[A-Z]{1}[a-z]{4,}$');
        if (pattern3.test(address))
            this._address = address;
        else throw 'Address is Incorrect!';
    }

    get city() { return this._city; }
    set city(city) {
        let pattern4 = RegExp('^[A-Z]{1}[a-z]{4,}$');
        if (pattern4.test(city))
            this._city = city;
        else throw 'City is Incorrect!';
    }

    get state() { return this._state; }
    set state(state) {
        let pattern5 = RegExp('^[A-Z]{1}[a-z]{4,}$');
        if (pattern5.test(state))
            this._state = state;
        else throw 'State is Incorrect!';
    }

    get zipcode() { return this._zipcode; }
    set zipcode(zipcode) {
        let pattern6 = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if (pattern6.test(zipcode))
            this._zipcode = zipcode;
        else throw 'Zipcode is Incorrect!';
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let pattern7 = RegExp('^[+][0-9]{1,}\\s?[1-9]{1}[0-9]{9}$');
        if (pattern7.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'PhoneNumber is Incorrect!';
    }

    get emailId() { return this._emailId; }
    set emailId(emailId) {
        let pattern8 = RegExp('^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}([.][a-z A-Z]{2})*$');
        if (pattern8.test(emailId))
            this._emailId = emailId;
        else throw 'EmailId is Incorrect!';
    }

    toString() {
        return "firstname= " + this.firstname + ", lastname = " + this.lastname + ", address = " + this.address +
            ", city = " + this.city + ", state = " + this.state + ", zipcode = " + this.zipcode +
            ", phoneNumber = " + this.phoneNumber + ", emailId = " + this.emailId;
    }
}

const addressBook = new AddressBook("Mark", "Wood", "Saintzeus", "Missouri", "California", "100245", "+01 5690125689", "mark.wood@orkut.com");
console.log("AddressBook: " + addressBook.toString());