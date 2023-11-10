function triangeOfNumbers(num) {
    let number = num;

    for(let i = 1;  i <=number; i++){
        let output= '';
        for(let j=1; j<=i; j++){
            output+= `${i} `
        }
        console.log(output)
    }

}
triangeOfNumbers(3);
//triangeOfNumbers(5);
//triangeOfNumbers(6);