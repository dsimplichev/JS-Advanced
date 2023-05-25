function solve(product, wghGrams, pricePerKilogram){


wghGrams = wghGrams / 1000;

let price = wghGrams * pricePerKilogram;
console.log(`I need $${price.toFixed(2)} to buy ${wghGrams.toFixed(2)} kilograms ${product}.`)
    
}
solve('orange', 2500, 1.80)