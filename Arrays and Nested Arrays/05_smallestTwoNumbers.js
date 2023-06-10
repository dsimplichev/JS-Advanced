function smallestNumber(array){



let sortNum = array.sort((a, b) => a - b);

let result = sortNum.slice(0,2);
console.log(result)

}
smallestNumber([30, 15, 50, 5] )