let a = +prompt('Enter 1st side *a*'),
    b = +prompt('Enter 2nd side *b*'),
    c = +prompt('Enter 3d side *c*');
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers');
} else if (a <= 0 || a === '' || b <= 0 || b === '' || c <= 0 || c === '') {
    alert('A triangle must have 3 sides with a positive definite length');
} else {
    if (a + b <= c || a + c <= b || b + c <= a) {
        alert('Triangle doesn’t exist');
    } else if (a === b && a === c) {
        console.log('Equilateral triangle');
    } else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
}