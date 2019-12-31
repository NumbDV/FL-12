function addOne(value1) {
    return value1 + 1;
}
function pipe(value2, ...args) {
    for (let num of args) {
        value2 = num(value2);
    }
    return value2;
}
console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));
console.log(pipe(1, addOne, addOne, addOne));