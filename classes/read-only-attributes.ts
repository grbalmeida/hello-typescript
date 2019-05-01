class Airplane {
    public readonly model: string

    constructor(model: string, public readonly prefix: string) {
        this.model = model
    }
}

const turboProp: Airplane = new Airplane('Tu-114', 'PT-ABC')

console.log(`Model: ${turboProp.model}`)
console.log(`Prefix: ${turboProp.prefix}`)

// turboProp.model = 'DC-8'
// turboProp.prefix = 'PT-DEF'
// Cannot assign to 'model' because it is a read-only property
// Cannot assign to 'prefix' because it is a read-only property