function specialNumbers(amount){
    let sum = 0;
    for(let i=1;i<=amount;i++){
        
        
        if(i==5 || i==7 || i==11){
            special = "True"
        }else{
            special = "False"
        }
        console.log(`${firstNum} -> ${special}`)
    }
}
specialNumbers(15);
specialNumbers(20);