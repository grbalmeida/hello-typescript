let isCold = true

if(isCold) {
    let action = 'Put on the coat!'
    console.log('Visible only within if:', action)
}

const cpf: string = '123.456.000-99'
console.log('Can not reassign a value to a constant:', cpf)

function revealTheSecret() {
    var secret = 'Intern'
    console.log('Function scope:', secret)
}

revealTheSecret()

for(let counter = 0; counter < 1; counter++) {
    console.log('Visible only for block scope:', counter)
}