function freeze(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propertyName)
    descriptor.writable = false
}

function notNegative(target: any, propertyName: string) {
    delete target[propertyName]
    Object.defineProperty(target, propertyName, {
        get: function(): any {
            return target['_' + propertyName]
        },
        set: function(value: any): any {
            if(value < 0) {
                throw new Error('Invalid Balance!')
            } else {
                target['_' + propertyName] = value
            }
        }
    })
}

function paramInfo(target: any, methodName: string, paramIndex: number) {
    console.log(`Target: ${target}`)
    console.log(`Method name: ${methodName}`)
    console.log(`Param index: ${paramIndex}`)
}

class CurrentAccount {
    @notNegative
    private balance: number

    constructor(balance: number) {
        this.balance = balance
    }

    @freeze
    public withdraw(@paramInfo value: number): boolean {
        this.balance -= value
        return true
    }

    @freeze
    public getBalance(): number {
        return this.balance
    }
}

const currentAccount: CurrentAccount = new CurrentAccount(10248.57)
currentAccount.withdraw(5000)
console.log(currentAccount.getBalance())
currentAccount.withdraw(5000)
console.log(currentAccount.getBalance())

try {
    currentAccount.withdraw(5000)
} catch(e) {
    console.log(e.message)
}