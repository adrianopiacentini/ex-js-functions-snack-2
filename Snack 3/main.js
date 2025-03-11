const sum = (firstNum, secondNum) => firstNum + secondNum
const substract = (firstNum, secondNum) => firstNum - secondNum
const divide = (firstNum, secondNum) => firstNum / secondNum
const multiply = (firstNum, secondNum) => firstNum * secondNum


const eseguiOperazione = (firstNum, secondNum, operator) => operator(firstNum, secondNum)

console.log(`Risultato: ${eseguiOperazione(2,3, sum)}`)

