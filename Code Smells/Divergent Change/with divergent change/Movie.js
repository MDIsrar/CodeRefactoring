module.exports = class Movie {
  constructor (name) {
    this.name = name
  }

  getPrice () {
    switch (this.name) {
      case 'Shutter Island':
        return 10
      case 'Titanic':
        return 9
      case 'The Lord of the Rings':
        return 11
      default:
        return 0
    }
  }

  getDirector () {
    switch (this.name) {
      case 'Shutter Island':
        return 'Martin Scorsese'
      case 'Titanic':
        return 'James Cameron'
      case 'The Lord of the Rings':
        return 'Peter Jackson'
      default:
        return 0
    }
  }

  getReleaseYear () {
    switch (this.name) {
      case 'Shutter Island':
        return 2010
      case 'Titanic':
        return 1998
      case 'The Lord of the Rings':
        return 2001
      default:
        return 0
    }
  }
}
