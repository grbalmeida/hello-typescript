function countdown(start: number = 5, end: number = 0): void {
    for(let counter = start; counter > end; counter--) {
        console.log(`${counter}\n`)
    }
}

countdown()