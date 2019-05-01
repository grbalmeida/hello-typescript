interface Calculation {
    (firstNumber: number, secondNumber: number): number
}

let pow: Calculation

pow = (base: number, exponent: number): number => {
    // return Math.pow(base, exponent)
    // return base ** exponent
    return Array(exponent).fill(base).reduce((previous, current) => previous * current)
}

console.log(pow(2, 11))