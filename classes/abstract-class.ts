abstract class Calculation {
    protected result: number = 0

    abstract execute(...numbers: number[]): void

    public getResult(): number {
        return this.result
    }
}

class Sum extends Calculation {
    public execute(...numbers: number[]): void {
        this.result = numbers.reduce((previous: number, current: number) => {
            return previous + current
        }, 0)
    }
}

class Subtraction extends Calculation {
    public execute(...numbers: number[]): void {
        this.result = numbers.reduce((previous: number, current: number) => {
            return previous - current
        }, 0)
    }
}

class Multiplication extends Calculation {
    public execute(...numbers: number[]): void {
        this.result = numbers.reduce((previous: number, current: number) => {
            return previous * current
        }, 1)
    }
}

const sum: Calculation = new Sum()
sum.execute(10, 20, 30, 40, 50)
console.log(sum.getResult()) // 150

const subtraction: Calculation = new Subtraction()
subtraction.execute(10, 20, 30, 40, 50)
console.log(subtraction.getResult()) // -150

const multiplication: Calculation = new Multiplication()
multiplication.execute(2, 2, 2, 2, 2, 2)
console.log(multiplication.getResult()) // 64