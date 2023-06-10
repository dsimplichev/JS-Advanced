function oddPositions(array){

let result = array.filter((n, index) => index % 2 !== 0).reverse().map(num => num * 2).join(' ');
return result;

}
oddPositions([10, 15, 20, 25])