const btn = document.querySelector('#result-btn')
const firstOperand = document.querySelector('#first-operand')
const secondOperand = document.querySelector('#second-operand')
const resultDiv = document.querySelector('#result')
const finish = (Number(firstOperand.value) + Number(secondOperand.value))
btn.addEventListener('click', onBtnClick)
function onBtnClick(){
    resultDiv.textContent = `Your answer is ${firstOperand.value} + ${secondOperand.value} = ${finish}`
}