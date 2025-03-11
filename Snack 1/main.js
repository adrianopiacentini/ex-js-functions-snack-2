function sommaDichiarativa(firstNum, secondNum){
return firstNum + secondNum
}

console.log(`Risultato: ${sommaDichiarativa(2,3)}`)

const sommaAnonima = function(firstNum, secondNum) {
    return firstNum + secondNum
}

console.log(`Risultato: ${sommaAnonima(2,3)}`)

const sommaArrow = (firstNum, secondNum) => firstNum + secondNum

console.log(`Risultato: ${sommaArrow(2,3)}`)
