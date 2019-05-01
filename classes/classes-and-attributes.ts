class Date {
    day: number
    month: number
    year: number

    constructor(day: number = 1, month: number = 1, year: number = 1970) {
        this.day = day
        this.month = month
        this.year = year
    }
}

class DateWithSmartConstructor {
    constructor(public day: number = 1, public month: number = 1, public year: number = 1971) {}
}

const date: Date = new Date(3, 11, 1991)
const weddingDate: Date = new Date()
const dateWithSmartConstructor: DateWithSmartConstructor = new DateWithSmartConstructor()

weddingDate.year = 2017
weddingDate.month = 11
weddingDate.day = 18

dateWithSmartConstructor.day = 10
dateWithSmartConstructor.month = 12
dateWithSmartConstructor.year = 1998

console.log(`Day: ${date.day}`)
console.log(`Month: ${date.month}`)
console.log(`Year: ${date.year}`)
console.log(`Formatted date: ${date.day}/${date.month}/${date.year}`)

console.log(weddingDate)
console.log(dateWithSmartConstructor)

export {}