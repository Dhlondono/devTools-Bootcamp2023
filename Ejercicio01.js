
function numberReverse(number){
    const reverse = number.toString().split("").reverse().join("")
    return Number(reverse)
    }

function next_pal(n){
    let palindromo=n+1
    while(palindromo != numberReverse(palindromo)){
        palindromo++
    }
    return palindromo
}

console.log(next_pal(2552))
