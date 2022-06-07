const res1 = document.querySelector('#resj1')
const res2 = document.querySelector('#resj2')
const keys = {
    'A': 'piedra',
    'S': 'papel',
    'D': 'tijera'
}
const keys2 = {
    'J': 'piedra',
    'K': 'papel',
    'L': 'tijera'
}
let j1
let j2

const pelea = (j1, j2) => {
    if (j1 == 'piedra') {
        if (j2 == 'papel') {
            res.innerText = `JUGADOR 2 GANA`
        }
        if (j2 == 'piedra') {
            res.innerText = `EMPATE`
        }
        if (j2 == 'tijera') {
            res.innerText = `JUGADOR 1 GANA`
        }
    }
    if (j1 == 'papel') {
        if (j2 == 'papel') {
            res.innerText = `EMPATE`
        }
        if (j2 == 'piedra') {
            res.innerText = `JUGADOR 1 GANA`
        }
        if (j2 == 'tijera') {
            res.innerText = `JUGADOR 2 GANA`
        }
    }
    if (j1 == 'tijera') {
        if (j2 == 'papel') {
            res.innerText = `JUGADOR 1 GANA`
        }
        if (j2 == 'piedra') {
            res.innerText = `JUGADOR 2 GANA`
        }
        if (j2 == 'tijera') {
            res.innerText = `EMPATE`
        }
    }
    console.log('SI PASO MANO')
}

const reload = () => {
    j1 = undefined
    j2 = undefined

    res.innerText = ''
    res1.innerText = '🏁 Jugador 1, elige. 🟠'
    res2.innerText = '🏁 Jugador 2, elige. 🟠'
    document.querySelector('#again').style.display = 'none'
}

document.addEventListener('keyup', (e) => {
    let tecla = e.key.toUpperCase()
    if (tecla in keys) {
        j1 = keys[tecla]
        res1.innerText = `🏁 Jugador 1, ready pa 💚`

    }
    if (tecla in keys2) {
        j2 = keys2[tecla]
        res2.innerText = `🏁 Jugador 2, ready pa 💚`
    }
    console.log(j1, j2)
    console.log(Boolean(j1) && Boolean(j2))
    if (j1 && j2) {
        pelea(j1, j2)
        document.querySelector('#again').style.display = 'block'
    }
})