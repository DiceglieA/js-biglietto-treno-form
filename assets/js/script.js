let bottone = document.getElementById('genera')
console.log ('genera')


bottone.addEventListener('click', function(){

    const priceKm = '0.21'
    let valuekm = document.getElementById('km').valuekm
    console.log(km)
    let valueage = document.getElementById('age').value
    console.log(age)
    let price = km * priceKm;
    console.log('price')

    if(valueage == 'over65') {
        document.getElementById('cost').innerHTML = `${price} * 0.6`}
        console.log('bla')
    else if (valueage == 'minorenne') {
        document.getElementById('cost').innerHTML = `${price} * 0.8`}
        console.log('blabla')
    else (valueage == 'maggiorenne') 
        

    

    
    
    
    document.getElementById('cost').innerHTML = `Il prezzo del biglietto è: ${price.toFixed(2)}`

})



