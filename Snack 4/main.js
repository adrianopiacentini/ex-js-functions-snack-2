const creaTimer = (ms) => {
    return function () {
        setTimeout(() => console.log('Tempo scaduto!'), ms)
    }
}

const newFunction = creaTimer(1000)
newFunction()