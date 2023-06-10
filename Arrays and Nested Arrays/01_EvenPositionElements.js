function even(array){

let evenElement = array.filter((el, index) => index % 2 == 0);
console.log(evenElement.join(' '))


}
even(['20', '30', '40', '50', '60'])