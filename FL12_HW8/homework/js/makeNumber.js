function makeNumber(someString) {
    let result = "";
    for (let argItem of someString) {
        if (!isNaN(argItem)) {
            result += argItem;
        }
    }
    return result;
}
console.log(makeNumber('ds231gdf5gxfd321'));