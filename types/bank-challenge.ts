type BankAccount = {
    balance: number,
    deposit: (value: number) => void   
}

type AccountHolder = {
    name: string,
    bankAccount: BankAccount,
    contacts: string[]
}

let bankAccount: BankAccount = {
    balance: 3456,
    deposit(value: number): void {
        this.balance += value
    }
}
 
let accountHolder: AccountHolder = {
    name: 'Ana Silva',
    bankAccount,
    contacts: ['3456-7890', '9876-5432']
}
 
accountHolder.bankAccount.deposit(3000)

console.log(`My name is ${accountHolder.name}`)
console.log(`My bank balance is ${accountHolder.bankAccount.balance}`)
console.log('My contact list', accountHolder.contacts)