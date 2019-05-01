let optionalHeight: null | number = 10
console.log(optionalHeight)

optionalHeight = null
console.log(optionalHeight)

type Contact = {
    name: string,
    firstPhone: string,
    secondPhone: null | string
}

const mirella: Contact = {
    name: 'Mirella',
    firstPhone: '1234-1234',
    secondPhone: null
}

const raul: Contact = {
    name: 'Raul',
    firstPhone: '9898-9898',
    secondPhone: '4545-4545'
}

console.log(mirella)
console.log(raul)

let shoudBeNull: null = null
console.log(shoudBeNull)