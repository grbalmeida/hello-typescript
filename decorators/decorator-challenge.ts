type Constructor = {
    new(...args: any[]): {}
}

type User = {
    name: string
    email: string
    admin: boolean
}

const userLoggedIn: User = {
    name: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

function adminProfile<Type extends Constructor>(constructor: Type) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(args)

            if(!userLoggedIn || !userLoggedIn.admin) {
                throw new Error('Without permission!')
            }
        }
    }
}
 
@adminProfile
class AdministrativeChange {
    critical(): void {
        console.log('Something critical has changed!')
    }
}
 
try {
    new AdministrativeChange().critical()
} catch(e) {
    console.log(e.message)
}

export {}