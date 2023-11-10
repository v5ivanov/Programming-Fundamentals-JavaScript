function centuriesToMinutes(century) {
    years = century * 100
    days = Math.floor(years * 365.2422)
    hours = days * 24
    minutes = hours * 60
    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)

}
centuriesToMinutes(1)
centuriesToMinutes(5)