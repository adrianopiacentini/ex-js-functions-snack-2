const creaContatoreAutomatico = (ms) => {
    let counter = 0

    return function timer() {
        setInterval(() => { 
            counter++
            console.log(counter)
        }, ms)
    }
}

const stopwatch = creaContatoreAutomatico(1000)
stopwatch()