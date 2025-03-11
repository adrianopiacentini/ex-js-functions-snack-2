const eseguiEferma = (message, start, stop) => {

    const startTimeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
            console.log(message)
        }, 1000)
    }, start)

    setTimeout(() => {
        clearInterval(intervalId)
    }, stop)
}

eseguiEferma('ciao', 1000, 10000)