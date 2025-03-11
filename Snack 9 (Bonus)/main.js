const sequenzaOperazioni = (functions, interval) => {
    functions.forEach((item, index) => {
        setTimeout(() => item(), interval * index)
    })
}

sequenzaOperazioni([
    () => console.log('Operazione 1'),
    () => console.log('Operazione 2'),
    () => console.log('Operazione 3')
], 2000)