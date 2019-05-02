@log
class HouseholdAppliance {
    constructor() {
        console.log('New...')
    }
}

function log(constructor: Function): void {
    console.log(constructor.toString())
}

new HouseholdAppliance()
new HouseholdAppliance()
new HouseholdAppliance()