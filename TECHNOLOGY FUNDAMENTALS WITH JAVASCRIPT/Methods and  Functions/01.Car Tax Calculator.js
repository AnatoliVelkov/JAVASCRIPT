function solve(power){
    printCarTaxPower(power);

    function printCarTaxPower(power){
        if(power <= 37){
            console.log(`${(power * 0.43).toFixed(2)} lv.`);
        }
        else if(37 < power && power <= 55){
            console.log(`${(power * 0.5).toFixed(2)} lv.`);
            
        }
        else if(55 < power && power <= 74){
            console.log(`${(power * 0.68).toFixed(2)} lv.`);
    
        }
        else if(74 < power && power <= 110){
            console.log(`${(power * 1.38).toFixed(2)} lv.`);
            
        }
        else if(110 < power){
            console.log(`${(power * 1.54).toFixed(2)} lv.`);
            
        }
    
    }
    
}

solve(45);