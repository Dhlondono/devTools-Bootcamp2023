
function numberReverse(number){
    const reverse = number.toString().split("").reverse().join("")
    return Number(reverse)
    }

function next_pal(n){
    if(isNaN(n)){return "Debe ingresar un numero"}
    else{let palindromo=n+1
        while(palindromo != numberReverse(palindromo)){
        palindromo++
        }
    return palindromo
    }
}

console.log(next_pal("AS"))
