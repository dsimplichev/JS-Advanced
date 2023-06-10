function sumFirstLast(array){

let firstNum = Number(array.pop());
let secondNum = Number(array.shift());
let sum = firstNum + secondNum;

console.log(sum)


}
sumFirstLast(['20', '30', '40'])