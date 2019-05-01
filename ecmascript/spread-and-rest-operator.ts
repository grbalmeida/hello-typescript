const numbers: number[] = [1, 10, 99, -5, 200, 1034]

const firstClass: string[] = ['John', 'Maria', 'Fernanda']
const secondClass: string[] = ['Fernando', 'Miguel', 'Lorena', ...firstClass]

const returnArray = (...params: number[]): number[] => {
    return params
}

const tuple: [number, string, boolean] = [1, 'abc', false]

function showTupleWithoutRest(number: number, string: string, boolean: boolean): void {
    console.log(`Number: ${number}, String: ${string}, Boolean: ${boolean}`)
}

function showTupleWithRest(...params: [number, string, boolean]): void {
    console.log(Array.isArray(params)) // true
    console.log(`Number: ${params[0]}, String: ${params[1]}, Boolean: ${params[2]}`)
}

console.log(`Max: ${Math.max(...numbers)}`)
console.log(`Min: ${Math.min(...numbers)}`)

console.log('First class:', firstClass)
console.log('Second class:', secondClass)

console.log(returnArray(0, 1, 2, 3))

showTupleWithoutRest(...tuple)
showTupleWithRest(...tuple)