function ages(number){
if(number<=2&&number>=0){
    console.log("baby")
}else if(number>=3&&number<=13){
    console.log("child")
}else if(number>=14&&number<=19){
    console.log("teenager")
}else if(number>=20&&number<=65){
    console.log("adult")
}else if(number>=66){
    console.log("elder")
}else{
    console.log("out of bounds")
}
}
ages(1)
ages(13)
ages(63)