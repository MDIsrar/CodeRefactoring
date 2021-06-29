const movieInfo = [{
    name: 'Shutter Island',
    price: 10,
    director: 'Martin Scorsese',
    releaseYear: 2010
}, {
    name: 'Titanic',
    price: 9,
    director: 'James Cameron',
    releaseYear: 1998
}, {
    name: 'The Lord of the Rings',
    director: 'Peter Jackson',
    price: 11,
    releaseYear: 2001
}]

module.exports = class Movie {
    constructor(name) {
        this.name = name
    }

    getPrice(name) {
        return movieInfo.filter((el) => el.name == name).length > 0 ? movieInfo.filter((el) => el.name == name)[0].price : 0
    }

    getDirector(name) {
        return movieInfo.filter((el) => el.name == name).length > 0 ? movieInfo.filter((el) => el.name == name)[0].director : 0
    }

    getReleaseYear(name) {
        return movieInfo.filter((el) => el.name == name).length > 0 ? movieInfo.filter((el) => el.name == name)[0].releaseYear : 0
    }
}