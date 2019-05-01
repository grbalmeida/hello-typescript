interface Person {
    name: string
    age: number
    greet(lastName: string): void
}

class Customer implements Person {
    name: string
    age: number
    dateOfLastPurchase: Date = new Date()

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet(lastName: string): void {
        // @ts-ignore
        console.log(`Hello, my name is ${this.name} ${lastName}`)
    }
}

const customer: Customer = new Customer('Han', 20)
customer.greet('Solo')
console.log(customer.age)
console.log(customer.dateOfLastPurchase)