function generate() {

const fixedPrice = "0.21"

let nome = document.getElementById('name').value
console.log('non capisco')

let valueKm = document.getElementById('km').value

let valueage = document.getElementById('age').value

let price = valueKm * fixedPrice

let carrozza = Math.floor(Math.random() * 9) + 1;

let CpCode = Math.floor(Math.random() * 99999) + 10000;


if (valueage == 'minorenne') {
    price = price * 0.8;
    //console.log('minorenne')

} else if (valueage == 'over65'){
    price = price * 0.6;
    //console.log('over65')
} else {
    cost = price
    //console.log('maggiorenne')
}

document.getElementById('cost').innerHTML = `${price.toFixed(2)} €`

document.getElementById('name').innerHTML = `${nome}`
console.log('machè')

document.getElementById('carrozza').innerHTML = `${carrozza}`

document.getElementById('cp-code').innerHTML = `${CpCode}`
}


