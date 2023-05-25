function sameNumber(num){

num = num.toString().split("").map(Number);

let digits = num[0];

let filtered = num.filter(num => num == digits);
let sum = num.reduce((a, b) => a + b, 0 );

if(filtered.lenght == num.lenght){
    console.log(true)
}else {
    console.log(false)
}
console.log(sum)


}
sameNumber(222222222)