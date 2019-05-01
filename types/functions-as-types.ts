function sum(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber
}

let calculation: (firstNumber: number, secondNumber: number) => number

calculation = sum

console.log(calculation(10, 20))