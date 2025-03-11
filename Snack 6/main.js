const creaContatoreAutomatico = (ms) => {
    let counter = 0

    const print = () => {
        counter++
        console.log(counter)
    }

    return function timer() {
        setInterval(print, ms)
    }
}

const stopwatch = creaContatoreAutomatico(1000)
stopwatch()