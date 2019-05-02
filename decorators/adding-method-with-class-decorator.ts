interface City {
    print?(): void
}

function printable(constructor: Function) {
    constructor.prototype.print = function() {
        console.log(this)
    }
}

@printable
class City {
    constructor() {
        console.log('New City...')
    }
}

const city: City = new City()
city.print && city.print()