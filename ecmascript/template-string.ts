const userId: string = 'Maria'
const notifications: string = '10'
const welcome: string = `
    Welcome ${userId},
    Notifications: ${parseInt(notifications) > 9 ? '+9': notifications}
`

console.log(welcome)

export {}