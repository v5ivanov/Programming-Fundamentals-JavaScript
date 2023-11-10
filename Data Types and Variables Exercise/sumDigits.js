function sumDigits(number) {
    let sum = 0;
    let numAsString = number.toString()
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i])
    }
    console.log(sum)

}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)