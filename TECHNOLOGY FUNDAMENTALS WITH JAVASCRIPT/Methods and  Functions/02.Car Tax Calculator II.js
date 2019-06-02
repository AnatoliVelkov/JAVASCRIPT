//Add a new tax calculation function to the previous code, according to the age of the vehicle. Second
//parameter is a car age. Multiply by tax on the previous task. The coefficient depends on the age of the
//vehicle as follows. Print the result.

//under 5 year - 2.80
//5 – 14 year - 1.50
//up to– 14 - 1.00

function solve(power, age){
    let baseTax = calculateBaseTax(power);
    let coefficient = carCoeficcient(age);

    function calculateBaseTax(power){
        let tax='';
        if(power <= 37){
            tax=  power * 0.43;
        }
        else if(37 < power && power <= 55){
            tax=  power * 0.5;
            
        }
        else if(55 < power && power <= 74){
            tax=  power * 0.68;
    
        }
        else if(74 < power && power <= 110){
            tax=  power * 1.38;
            
        }
        else if(110 < power){
            tax=  power * 1.54;
            
        }
        return tax;
    
    }
    function carCoeficcient(age){
        if (age < 5){
           return 2.8;
        }
        if(5 <= age && age< 14){
            return 1.5;
        }
        
        return 1;
    }
    console.log(`${(baseTax * coefficient).toFixed(2)} lv.`)
    
}
solve(45, 10);