function aggElements(array){

    let result = "";
    let sum = 0;
    console.log(array.reduce((a, c) => a + c, 0));
  
  
      array.map(num => {
          sum += 1/num;
      })
  
      console.log(sum)
  
    array.map((el) => {
      result += el;
    });
  
    console.log(result);


}
aggElements([2, 4, 8, 16])
