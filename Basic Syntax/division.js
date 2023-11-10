function division(number){
    let divider=0;
    let flag = false
    if(number%10==0){
        divider = 10
        flag = true
    }else if(number%7==0){
        divider = 7
        flag = true
    }else if(number%6==0){
        divider=6
        flag = true
    }else if(number%3==0){
        divider=3
        flag = true
    }else if(number%2==0){
        divider = 2
        flag = true 
    }
    if (flag){
        console.log(`The number is divisible by ${divider}`)
    }else{
        console.log("Not divisible")
    }
    }
    
division(30)
division(15)
division(12)
division(1643)