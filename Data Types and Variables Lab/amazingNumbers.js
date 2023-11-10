function amazingNumbers(number) {
    let sum = 0;
    let numberAsString = number.toString();
    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i])
    }
    let amazing = ''
    if(sum.toString().includes(9)){
        amazing = 'True' 
    }else{
        amazing = 'False'
    }
    console.log(`${number} Amazing? ${amazing}`)


}
amazingNumbers(1233)
amazingNumbers(999)