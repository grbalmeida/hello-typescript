function failure(message: string): never {
    throw message
}

type Product = {
    name: string,
    price: number,
    validateProduct(): void
}

const product: Product = {
    name: 'Soap',
    price: -1,
    validateProduct() {
        if(!this.name || this.name.trim().length === 0) {
            failure('Must have a name')
        }

        if(this.price <= 0) {
            failure('Invalid price!')
        }
    }
}

product.validateProduct()