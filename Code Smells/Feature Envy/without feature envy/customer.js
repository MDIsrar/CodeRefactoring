const Phone = require('./phone')

class Customer {
    construtor(name, areaCode, prefix, number) {
        this.name = name
        this.phone = new Phone(areaCode, prefix, number)
    }
    getPhone() {
        return this.phone.getFullNumber();
    }
}