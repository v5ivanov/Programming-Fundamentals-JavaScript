function printAndSum(start, end) {
    let sum=0;
    let output= ''
    for (let i = start; i <= end; i++){
        output+= `${i} `
        sum += i;
    }
    console.log(output)
    console.log(`Sum: ${sum}`)

}
printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)