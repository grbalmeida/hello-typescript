import Car from './access-modifiers'

class Ferrari extends Car {
    constructor(model: string, maximumSpeed: number) {
        super('Ferrari', model, maximumSpeed)
    }

    public speedUp(): number {
        return this.changeSpeed(20)
    }

    public brake(): number {
        return this.changeSpeed(-15)
    }
}

const f40: Ferrari = new Ferrari('F40', 324)

console.log(`${f40.brand} ${f40.model}`)
console.log(f40.speedUp())
console.log(f40.brake())