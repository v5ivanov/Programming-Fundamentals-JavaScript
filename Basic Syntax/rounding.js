function rounding(number, limit){
    if(limit>15){
        limit=15
    }
    let finalResult = number.toFixed(limit)
    console.log(parseFloat(finalResult))
    

}
rounding(3.1415926535897932384626433832795,2)
rounding(10.5,3)