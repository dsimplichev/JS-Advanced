function greatestCommon(num1,num2){

let currentBig = 0;

for(let i = 0; i <= num2; i++){
    if( num1 % i == 0 && num2 % i == 0) {
        currentBig = i;
    }
}

console.log(currentBig)



}
greatestCommon(15,5)