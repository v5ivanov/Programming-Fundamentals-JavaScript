function rightPlace(string, char, finalstring){
    let rightWord=finalstring
    let finalResult = string.replace('_', `${char}`);
if(finalResult==rightWord){
    console.log('Matched')
}else{
    console.log('Not Matched')
}   

}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')