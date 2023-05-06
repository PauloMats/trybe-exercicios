let myArray = [2, 4, 5, 8, 7, 3];

function average (array) {
    let sum = 0;

    for (let value of array){
        sum += value;
    }
    
    let average = sum / array.length;

    return average;
}

console.log(average(myArray));