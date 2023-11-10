function fuelMoney(distance,passengers,pricePerLiter){
    let neededFuel = (distance / 100) * 7
    let increase = passengers * 0.1
    let totalNeededFuel = neededFuel + increase
    let neededMoney = totalNeededFuel * pricePerLiter
    console.log(`Needed money for that trip is ${neededMoney} lv.`)

}
fuelMoney(260, 9, 2.49)
fuelMoney(90, 14, 2.88)