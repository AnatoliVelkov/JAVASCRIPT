function input(firstNum, secNum, thirthNum){
    let result=firstNum + secNum + thirthNum;

    if(result%1 == 0){
        console.log(`${result} - Integer`);
    }
    else{
        console.log(`${result} - Float`)
    }

}
input(9, 100, 1.1);