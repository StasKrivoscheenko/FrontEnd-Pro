const number = printNum();
const evenSum = getEvenSum(number);
const oddSum = getOddSum(number);
console.log('Even sum: '+evenSum)
console.log('Odd sum: '+oddSum)
function printNum(){
    let num;
    do{
        num = prompt('Print a number ');
    }
    while (isNumInvalid(num));
    return Number(num);
}
function isNumInvalid(val){
    return val === null || val.trim() === '' || isNaN(val) || val <= 0;
}
function getEvenSum(val){
    let i = 0;
    let result = 0;
    while (i <= val){
        if(i % 2 === 0){
            result += i;
        }
        i++
    }
    return result
}
function getOddSum(val){
    let i = 0;
    let result = 0;
    while (i <= val){
        if(i % 2 === 1){
            result += i;
        }
        i++
    }
    return result
}