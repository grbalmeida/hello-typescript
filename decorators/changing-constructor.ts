type Constructor = {
    new(...args: any[]): {}
}

function logObject(constructor: Constructor) {
    console.log('Performed only once...')
    return class extends constructor {
        constructor(...args: any[]) {
            console.log('Before...')
            super(args)
            console.log('After...')
        }
    }
}

@logObject
class Car {
    constructor() {
        console.log('New Car...')
    }
}

new Car()
new Car()
new Car()