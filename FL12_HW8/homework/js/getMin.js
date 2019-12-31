function getMin() {
    let minValue = Infinity;
    for (let item of arguments) {
        if (item < minValue) {
            minValue = item;
        }
    }
    return minValue;
}
console.log(getMin(5,3,66,2,4));