class Product {
    constructor(public name: string, public price: number, public discount: number = 0) {}

    public discountPrice(): number {
        return this.price - this.price * this.discount
    }

    public summary(): string {
        return `${this.name} costs ${this.discountPrice()} (${this.discount * 100}% off)`
    }
}

const rice: Product = new Product('Rice', 8.95, 0.1)
const bean: Product = new Product('Bean', 4.58)

console.log(rice.summary())
console.log(bean.summary())