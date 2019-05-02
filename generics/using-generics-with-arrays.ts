type Person = {
    name: string
    age: number
}

function print<GenericType>(args: GenericType[]): void {
    args.forEach(element => console.log(element))
}

const schoolGrades: Array<number> = [10, 9.3, 7.7]
schoolGrades.push(8.4)

const names: Array<string> = ['Ana', 'Bia', 'Carlos']

const maria: Person = { name: 'Maria', age: 20 }
const jorge: Person = { name: 'Jorge', age: 21 }
const roberto: Person = { name: 'Roberto', age: 22 }

console.log(schoolGrades)
print<number>(schoolGrades)
print<string>(names)
print<Person>([maria, jorge, roberto])