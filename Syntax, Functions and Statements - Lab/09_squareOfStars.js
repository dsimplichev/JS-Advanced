function squareOfStars(input){
    if(input == undefined) {
        input = 5;
    }
    for (let i = 0; i < input; i++){
        console.log('* '.repeat(input));
        
    }



}
squareOfStars(5)