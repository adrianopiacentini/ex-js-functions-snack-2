const contoAllaRovescia = (n) => {
    for (let i = n; i > 0; i--) {
        ((i) => {
            setTimeout(() => {
                console.log(i) 
                if (i === 1) {
                    console.log('Tempo scaduto!')
                }
            }, (n - i) * 1000) 
        })(i)
    }
}
contoAllaRovescia(5)