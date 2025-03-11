// const eseguiEferma = (message, start, stop) => {

//     const startTimeoutId = setTimeout(() => {
//         intervalId = setInterval(() => {
//             console.log(message)
//         }, 1000)
//     }, start)

//     setTimeout(() => {
//         clearInterval(intervalId)
//     }, stop)
// }

const eseguiEferma = (message, interval, stop) => {
    
    const intervalId = setInterval(()=> {
        console.log(message)
    }, interval)

    setTimeout(()=>{
        clearInterval(intervalId)
    }, stop)
}

eseguiEferma('Sto eseguendo...', 1000, 10000)