let phone=[5,5,5,1,3,4,7,8,9,0]

function isvalid(phonesNumbers) {
    let valid = false
    if (phonesNumbers.length === 10 ) {
        for (let number of phonesNumbers) {
            if (isNaN(Number(number))) {
                valid = false
                console.log(number, '1')
                break
            }
            if (Number(number) > 9 || Number(number) < 0) {
                console.log(number, '2')
                valid = false
                break 
            }
            valid = true
        }
    }
    return valid
}

function createPhoneNumber(phoneNumber){
    const valiadPhone = isvalid(phoneNumber)
    if (valiadPhone) {
        testFormat = `(${phoneNumber.slice(0,3).join("")}) ${phoneNumber.slice(3,6).join("")}-${phoneNumber.slice(6,10).join("")}`
        return testFormat
    } else{
        console.error('El arreglo contiene elementos que no puedes ser procesados, recuerde que deben ser numeros de 0 a 9')
    }
}

console.log(createPhoneNumber(phone))
