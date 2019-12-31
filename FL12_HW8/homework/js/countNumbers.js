function makeNumber(someString) {
    let result = "";
    for (let argItem of someString) {
        if (!isNaN(argItem)) {
            result += argItem;
        }
    }
    return result;
}

function countNumbers(someString) {
    let countedNumbers = makeNumber(someString);
    let numbersList = {};
    for (let num of countedNumbers) {
        numbersList[num] = numbersList[num] ? numbersList[num] + 1 : 1;
    }
    return numbersList;
}
console.log(countNumbers('dsa231321'));