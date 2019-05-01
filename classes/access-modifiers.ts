class Car {
    private currentSpeed: number = 0

    constructor(public brand: string, public model: string, private maximumSpeed: number) {}

    protected changeSpeed(delta: number): number {
        const newSpeed: number = this.currentSpeed + delta
        const isSpeedValid: boolean = newSpeed >= 0 && newSpeed <= this.maximumSpeed

        if(isSpeedValid) {
            this.currentSpeed = newSpeed
        } else {
            this.currentSpeed = delta > 0 ? this.maximumSpeed : 0
        }

        return this.currentSpeed
    }

    public speedUp(): number {
        return this.changeSpeed(5)
    }

    public brake(): number {
        return this.changeSpeed(-5)
    }
}

const car: Car = new Car('Ford', 'Ka', 185)

Array(50).fill(0).forEach((): void => console.log(car.speedUp()))
Array(40).fill(0).forEach((): void => console.log(car.brake()))

export default Car