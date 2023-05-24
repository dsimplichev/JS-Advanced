function mathOperation(num1, num2, operator) {

    let result;

    if (operator == "-") {
        subtrackt(num1, num2)
    } else if (operator == "+") {
        sum(num1, num2);
    } else if (operator == "/") {
        devide(num1, num2);
    } else if (operator == "*") {
        multiply(num1,num2);
    } else if (operator == "%") {
        moduleDevide(num1,num2);
    } else {
        powNumbers(num1,num2);
    }
    
    function subtrackt(a,b){
        result = a - b;
        return result;
    }
    function sum(a,b){
        result = a + b;
        return result;
    }
    function devide(a,b){
        result = a / b;
        return result;
    }
    function multiply(a,b){
        result = a * b;
        return result;
    }
    function moduleDevide(a,b){
        result = a % b;
        return result;
    }
    function powNumbers(a,b){
        result = a ** b;
        return result;
    }
    console.log(result)

}
mathOperation(5, 6, '+') 