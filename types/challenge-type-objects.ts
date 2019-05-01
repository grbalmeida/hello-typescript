const palmReading = (hours: number): string => {
    if(hours <= 8) {
        return 'Early'
    } else {
        return 'Late'
    }
}

type Employee = {
    supervisors: string[],
    palmReading: (hours: number) => string
}

let ana: Employee = { supervisors: ['Maria', 'Jorge'], palmReading }
let bruno: Employee = { supervisors: ['Rosana', 'Fernando'], palmReading }

console.log(ana.supervisors)
console.log(bruno.supervisors)

console.log(ana.palmReading(8))
console.log(bruno.palmReading(9))

export {}