function diagonalSums(arrays){


    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let index = 0;
    for (let i = 0; i < arrays.length; i++) {
        firstDiagonal += arrays[i][index];
        index++;
        continue;
    }

    let secondIndex = arrays[0].length - 1 ;
    for (let i = 0; i < arrays.length; i++) {
        secondDiagonal += arrays[i][secondIndex];
        secondIndex--;
    }

    console.log(firstDiagonal, secondDiagonal);


}
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89],
  ])