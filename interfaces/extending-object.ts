interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(JSON.stringify(this))    
}

const number: number = 10
number.log()

const person: { name: string } = { name: 'Maria' }
person.log()