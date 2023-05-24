function sumOfNum(num1, num2) {

    let sum = 0;
    num1 = Number(num1);
    num2 = Number(num2);

    for (let i = num2; i >= num1; i--) {
        sum += Number(i);

    }
    return sum;
}

console.log(sumOfNum('1', '5'))