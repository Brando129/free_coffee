/* For each of the 6 coffee cups I buy, I get a 7th cup free.
In total, I get 7 cups. Create a function that takes n cups
bought and return as an integer the total number of cups I would get. */

function freeCoffee(cups){
    var freeCups = cups / 6
    var totalCoffee = cups + freeCups
    return totalCoffee
}

console.log(freeCoffee(12))
