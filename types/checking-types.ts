function isANumber(value: any): void {
    if(typeof value === 'number') {
        console.log(`${value} is a number`)
    } else {
        console.log(typeof value)
    }
}

isANumber(10)
isANumber('10')