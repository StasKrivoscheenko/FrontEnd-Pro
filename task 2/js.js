let a = prompt("Write first number");
while (a === null || a.trim() === '') {
    a = prompt("Write any number pls")
}
let b = prompt("Write second number");
while (b === null || b.trim() === '') {
    b = prompt("Write any number pls")
}
let operation = prompt('Choose the operation: +, -, /, *')
while (operation === null || operation.trim() === '') {
    operation = prompt("Choose any operation pls")
}
const resultSum = ((+a) + (+b))
const resultSub = ((+a) - (+b))
const resultDiv = ((+a) / (+b))
const resultMul = ((+a) * (+b))
switch (operation) {
    case '/':
        alert('Your answer is ' + a + '/' + b + '=' + resultDiv);
        break;
    case '*':
        alert('Your answer is ' + a + '*' + b + '=' + resultMul);
        break;
    case '-':
        alert('Your answer is ' + a + '-' + b + '=' + resultSub);
        break;
    case '+':
        alert('Your answer is ' + a + '+' + b + '=' + resultSum);
        break;
}


