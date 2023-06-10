function negativPositive(array) {

    let result = [];

    array = array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            result.unshift(array[i]);
        } else {
            result.push(array[i])
        }
    }

console.log(result.join('\n'))

}


negativPositive([7, -2, 8, 9, -1])