const sumWithoutArrowFunction = function(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber
}

const subtractionWithArrowFunction = (firstNumber: number, secondNumber: number): number => (
    firstNumber - secondNumber
)

const greeting = (): void => console.log('Hello!')

const talkTo = (name: string): void => console.log(`Hello ${name}!`)

function normalWithThis() {
    // @ts-ignore
    console.log(this)
}

const normalWithEspecialThis = normalWithThis.bind({ name: 'Maria' })

const arrowWithThis = () => {
    // @ts-ignore
    console.log(this)
}

console.log(sumWithoutArrowFunction(10, 20))
console.log(subtractionWithArrowFunction(15, 18))
greeting()
talkTo('John')
normalWithThis() // undefined
normalWithEspecialThis() // { name: 'Maria' }
arrowWithThis()

export {}