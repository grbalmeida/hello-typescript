interface Person {
    name: string
    age?: number
    [prop: string]: any
    greet(lastName: string): void
}

function greeting(person: Person): void {
    console.log(`Hello, ${person.name}`)
}

function changeName(person: Person): void {
    person.name = 'Joana'
}

function greet(lastName: string): void {
    // @ts-ignore
    console.log(`Hello, my name is ${this.name} ${lastName}`)
}

const person: Person = {
    name: 'John',
    age: 27,
    greet
}

const maria: Person = {
    name: 'Maria',
    age: 19,
    height: 1.59,
    weight: 50,
    greet
}

greeting(person)
changeName(person)
greeting(person)
greeting(maria)
person.greet('Skywalker')
maria.greet('Brooks')