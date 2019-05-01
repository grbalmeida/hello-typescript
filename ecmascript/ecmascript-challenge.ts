// Exercise 1

const double = (value: number): number => value * 2
console.log(double(10))
 
// Exercise 2

const sayHi = (name: string = 'Max'): void => console.log(`Hi ${name}`)
sayHi()
sayHi('Anna')
 
// Exercise 3

const numbers: number[] = [-3, 33, 38, 5]
console.log(Math.min(...numbers))
 
// Exercise 4

const array = [55, 20]
array.push(...numbers)
console.log(array)
 
// Exercise 5

const schoolGrades: number[] = [8.5, 6.3, 9.4]
const [firstGrade, secondGrade, thirdGrade] = schoolGrades
console.log(firstGrade, secondGrade, thirdGrade)
 
// Exercise 6

type Cientist = {
    name: string,
    experience: number
}

const cientist: Cientist = { name: 'Will', experience: 12 }
const { name, experience } = cientist
console.log(name, experience)

export {}