function emptyDecorator(_: Function) {}

function log(constructor: Function) {
    console.log(constructor)
}

function logIf(value: boolean) {
    return value ? log : emptyDecorator
}

@logIf(true)
class Person {
    name: string

    constructor(name: string) {
        this.name = name
    }

    printName() {
        console.log(this.name)
    }
}

const john: Person = new Person('John')
john.printName()

export {}