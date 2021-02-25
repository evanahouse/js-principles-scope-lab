
var customerName = 'bob';
var bestCustomer = setBestCustomer();

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'john'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bill'
    console.log(leastFavoriteCustomer)
}

console.log(changeLeastFavoriteCustomer())

