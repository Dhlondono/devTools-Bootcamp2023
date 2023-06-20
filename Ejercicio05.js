function isvalid(size) {
    let valid = false
    if (isNaN(Number(size))) {
        valid = false
    } else {
        valid = true
    }

    if (Number(size) > 0 && size%1 === 0) {
        valid = true
    } else {
        valid = false
    }
    return valid
}

function drawX(size) {
    const valid = isvalid(size)
    if (valid) {
        let arrayX = []
        let rowX = []
        for(let fillCross=0; fillCross < size /2; fillCross++ ) {
            rowX = []
            for( let index=0; index<size; index++) {
                if (index === fillCross) {
                    rowX.push('*')
                } else if (index === (size - 1 - fillCross)) {
                    rowX.push('*')
                } else {
                    rowX.push(' ')
                }
            }
            arrayX.push(rowX)
        }
        const reverse = arrayX.slice().reverse().slice(1)
        arrayX.forEach(element => {
            console.log(element.join(''))
        })
        reverse.forEach(element => {
            console.log(element.join(''))
        })
    } else {
        console.log(`El tamaño ${size} no es valido para la función drawX`)
    }
}

drawX(5)