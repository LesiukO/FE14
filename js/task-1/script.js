


let fibos = []
fibos[0,1] = 0

function renderFibo () {
    console.log(fibos)
}

function createFibo (N) {
    F0 = fibos[fibos.length - 1]
    F1 = fibos[fibos.length]

    console.log(F0, F1)
}

createFibo()

// renderFibo()