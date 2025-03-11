const creaThrottler = (callback, ms) => {
    let lastEsec = 0;
    return function (...args) {
        const time = Date.now()

        if (time - lastEsec >= ms) {
            lastEsec = time
            callback(...args)
        } else {
            console.log('Stai eseguendo troppe funzioni!')
        }
    }
}

const throttledLog = creaThrottler(() => console.log('Eseguito!'), 2000)

throttledLog()
throttledLog()
setTimeout(throttledLog, 2500)