function fizzBuzz(n) {
    for (let number = 1; number <= n; number++) {
        if (number%3 === 0 && number%5 === 0) {
            console.log("FizzBuzz")
            continue
        }
        if (number%3 === 0) {
            console.log("Fizz")
            continue
        }
        if (number%5 === 0) {
            console.log("Buzz")
            continue
        }
        console.log(number)
    }
}

fizzBuzz(15)