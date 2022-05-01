let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

let input = document.getElementById("number-to-convert");

//function that evaluate the value and returns result

function result(){
    
    let x = Number(input.value)
    
    //1 meter = 3.2808 feet | 1 foot = 0.3048 meters
    let meterConversion = (x * 3.2808).toFixed(3)
    let feetConversion = (x * 0.3048).toFixed(3)

    //1 liter = 0.2641 gallon | 1 gallon = 3.7854 liters
    let literConversion = (x*0.2641).toFixed(3)
    let gallonConversion = (x*3.7854).toFixed(3)

     // 1 kg = 2.2046 pounds  | 1 pound = 0.4535
     let kgConversion = (x*2.2046).toFixed(3)
     let poundconversion = (x*0.4535).toFixed(3)
     
     lengthEl.textContent = (x + " meters = " + meterConversion + " feets | " + x + " feet = "+ feetConversion + " meters") 

     volumeEl.textContent = (x + " liters = " + literConversion + " gallons | " + x + " gallon = "+ gallonConversion     + " liters")  
     
     
     massEl.textContent = (x + " kilogram = " + kgConversion + " pounds | " + x + " pound = "+ gallonConversion  + " kilograms")  
}
