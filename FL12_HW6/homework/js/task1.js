let a = +prompt('Enter value *a*'),
    b = +prompt('Enter value *b*'),
    c = +prompt('Enter value *c*');
if (a === 0) {
    console.log('Invalid input for *a*');
}
if (isNaN(a || b || c) === true) {
    console.log('Invalid input data');
}
let d = b * b - 4 * a * c;
if (d === 0) {
    let x = -b / 2 * a;
    console.log('x = ' + x);
} else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log('x1 = ' + x1 + ' x2 = ' + x2);
} else {
    console.log('no solution');
}