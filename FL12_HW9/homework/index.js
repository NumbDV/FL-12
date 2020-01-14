function convert() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(typeof arguments[i] === 'string' ? +arguments[i] : arguments[i].toString());
    }
    return arr;
}

function executeForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function mapArray(arr, callback) {
    let transformedArr = [];
    executeForEach(arr, item => transformedArr.push(callback(+item)));
    return transformedArr;
}

function filterArray(arr, func) {
    let filteredArr = [];
    executeForEach(arr, item => func(item) ? filteredArr.push(item) : '');
    return filteredArr;
}

function flipOver(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

function makeListFromRange(arr) {
    let rangeList = [];
    for (let i = arr[0]; i < arr[1] + 1; i++) {
        rangeList.push(i);
    }
    return rangeList;
}

const actors = [{
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];

function getArrayOfKeys(arr, key) {
    let valueArr = [];
    executeForEach(arr, item => valueArr.push(item[key]));
    return valueArr;
}

function substitute(arr) {
    const MIN_NUMBER = 30;
    return mapArray(arr, item => item >= MIN_NUMBER ? item : '*');
}

const date = new Date(2019, 0, 2);

function getPastDay(date, day) {
    const msInDay = 86400000;
    const passedDays = day * msInDay;
    return new Date(date.getTime() - passedDays).getDate();
}

function formatDate(date) {
    const addZero = number => number < 10 ? '0' + number : number;
    return `${date.getFullYear()}/${1+date.getMonth()}/${date.getDate()} ` +
        `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
}