function biggerHalf(array){

let middle = Math.floor(array.length / 2)
let result = array.sort((a,b) => a - b)
console.log(result)


}
biggerHalf([4, 7, 2, 5])
