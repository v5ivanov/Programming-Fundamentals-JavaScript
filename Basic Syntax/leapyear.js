function leapyear(number) {
    if (number % 4 == 0 && number % 100 !== 0) {
        console.log('yes')
    } else if (number % 400 == 0){
        console.log('yes')
    }else{
        console.log('no')
    }

}   
leapyear(1984)
leapyear(2003)
leapyear(4)  