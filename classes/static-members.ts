class Math {
    static PI: number = 3.1416

    static circumferenceArea(radius: number): number {
        return Math.PI * radius * radius
    }
}

console.log(Math.circumferenceArea(10))

export {}