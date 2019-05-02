abstract class BinaryOperation<GenericType, Return> {
    constructor(public firstOperand: GenericType, public secondOperand: GenericType) {}

    abstract execute(): Return
}

class BinarySum extends BinaryOperation<number, number> {
    execute(): number {
        return this.firstOperand + this.secondOperand
    }
}

class BinarySubtraction extends BinaryOperation<number, number> {
    execute(): number {
        return this.firstOperand - this.secondOperand
    }
}

class BinaryMultiplication extends BinaryOperation<number, number> {
    execute(): number {
        return this.firstOperand * this.secondOperand
    }
}

class BinaryDivision extends BinaryOperation<number, number> {
    execute(): number {
        if(this.secondOperand === 0) {
            throw new TypeError('Can not divide by zero')
        }

        return this.firstOperand / this.secondOperand
    }
}

class ConcatenateStrings extends BinaryOperation<string, string> {
    execute(): string {
        return `${this.firstOperand} ${this.secondOperand}`
    }
}

class InternalDate {
    constructor(public day: number, public month: number, public year: number) {}
}

class DifferenceBetweenDates extends BinaryOperation<InternalDate, string> {
    getTime(data: InternalDate): number {
        const { day, month, year } = data
        return new Date(`${month}/${day}/${year}`).getTime()
    }

    execute(): string {
        const firstTime: number = this.getTime(this.firstOperand)
        const secondTime: number = this.getTime(this.secondOperand)
        const difference = Math.abs(firstTime - secondTime)
        const day: number = 1000 * 60 * 60 * 24
        return `${Math.ceil(difference / day)} day(s)`
    }
}

console.log(new BinarySum(3, 4).execute())
console.log(new BinarySubtraction(10, 2).execute())
console.log(new BinaryMultiplication(3, 5).execute())
console.log(new BinaryDivision(10, 2).execute())

try {
    console.log(new BinaryDivision(10, 0).execute())
} catch(e) {
    console.log(e.message)
}

console.log(new ConcatenateStrings('Good', 'Morning').execute())

const firstDate: InternalDate = new InternalDate(9, 10, 2010)
const secondDate: InternalDate = new InternalDate(18, 10, 2011)

console.log(new DifferenceBetweenDates(firstDate, secondDate).execute()) // 374 day(s)