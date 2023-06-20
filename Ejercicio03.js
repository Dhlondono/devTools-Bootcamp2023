const nombres = ['Juan','María','Pedro','Juan','María','María']

function countNameRepetitions(names) {
    const repeat = {}
    names.forEach(name => {
        if (name in repeat) {
            repeat[name] = repeat[name] + '*'
        } else {
            repeat[name] = '*'
        }
    })
    return repeat
}

console.log(countNameRepetitions(nombres))