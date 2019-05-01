// Exercise 1 - Classe

class Motorcycle {
    private name: string
    private velocity: number = 0

    constructor(name: string) {
        this.name = name
    }

    public honk(): void {
        console.log('Toooooooooot!')
    }

    public speedUp(delta: number): void {
        this.velocity += delta
    }

    public getVelocity(): number {
        return this.velocity
    }

    public getName(): string {
        return this.name
    }
}
 
const motorcycle: Motorcycle = new Motorcycle('Ducati')
motorcycle.honk()
console.log(motorcycle.getVelocity())
motorcycle.speedUp(30)
console.log(motorcycle.getVelocity())
 
// Exercise 2 - Inheritance

abstract class _2DObject {
    public base: number = 0
    public height: number = 0
    public abstract area(): number
}

class Rectangle extends _2DObject {
    public area(): number {
        return this.base * this.height
    }
}
 
const rectangle: _2DObject = new Rectangle()
rectangle.base = 5
rectangle.height = 7
console.log(rectangle.area())
 
// Exercise 3 - Getters and Setters

class Intern {
    private _firstName: string = ''

    get firstName(): string {
        return this._firstName
    }

    set firstName(firstName: string) {
        if(firstName.length >= 3) {
            this._firstName = firstName
        } else {
            this._firstName = ''
        }
    }
}

const intern: Intern = new Intern()
console.log(intern.firstName) // ''
intern.firstName = 'Le'
console.log(intern.firstName) // ''
intern.firstName = 'Leonardo'
console.log(intern.firstName) // 'Leonardo'