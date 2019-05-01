type Item = {
    name: string,
    price: number,
    features: { isImported: boolean }
}

const item: Item = {
    name: 'SSD 480GB',
    price: 200,
    features: {
        isImported: true
    }
}

const { name, price, features: { isImported } } = item

console.log(`Name: ${name}`)
console.log(`Price: ${price}`)
console.log(`Is imported? ${isImported}`)

export {}