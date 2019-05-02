interface Person {
    name: string
    age: number
}

function echo(object: any): any {
    return object
}

function echoImproved<GenericType>(object: GenericType): GenericType {
    return object
}

console.log(echo('John'))
console.log(echo(27))
console.log(echo({ name: 'John', age: 27 }))

console.log(echoImproved<string>('John'))
console.log(echoImproved<number>(27))
console.log(echoImproved<Person>({ name: 'John', age: 27 }))