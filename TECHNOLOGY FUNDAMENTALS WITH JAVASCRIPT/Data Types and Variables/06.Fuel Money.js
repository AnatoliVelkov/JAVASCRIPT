function input(kilometers, passengers, priceForLiter){
    let diesel=(kilometers/100)*7;
    diesel=diesel+(passengers*0.1);
    let result=diesel*priceForLiter;
    console.log(`Needed money for that trip is ${result}lv.`);

}
input(90, 14, 2.88);