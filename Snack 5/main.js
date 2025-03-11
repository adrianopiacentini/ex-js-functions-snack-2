const stampaOgniSecondo = (message) => {
    let counter = 0
    
    function print() {
        console.log(message)
        counter++
        if (counter === 10) {
            clearInterval(intervalId)
        }
    }

    const intervalId = setInterval(print, 1000)
}

stampaOgniSecondo('spam')

// Ho aggiunto un if con clearInterval per fermare il setInterval dopo 10 iterazioni, in modo da non renderlo un loop infinito
