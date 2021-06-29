module.exports = class Phone {
    constructor(areaCode, prefix, number) {
        this.areaCode = areaCode
        this.prefix = prefix
        this.number = number
    }

    getArea() {
        return this.areaCode
    }

    getPrefix() {
        return this.prefix
    }

    getNumber() {
        return this.number
    }

}