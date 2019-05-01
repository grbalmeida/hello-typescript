class Person {
    private _age: number = 0

    get age(): number {
        return this._age
    }

    set age(age: number) {
        if(age >= 0 && age <= 120) {
            this._age = age
        }
    }
}

const firstPerson: Person = new Person()

firstPerson.age = 10
firstPerson.age = -3

console.log(firstPerson.age) // 10