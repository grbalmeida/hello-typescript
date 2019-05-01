function after3s() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            return resolve('After 3s...')
        }, 3000)
    })
}

after3s().then(message => console.log(message))