let name: string = 'John'

function returnsMyName(): string {
    return name
}

function sayHi(): void {
    console.log('Hi!')
}

function multiply(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber
}

console.log(returnsMyName())
sayHi()
console.log(multiply(5, 4))

export {}