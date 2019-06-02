function calcAndPrint(digits){
    let firstNum=digits.shift();
    let lastNum=digits.pop();

    let result=firstNum + lastNum;
    console.log(result);

}
calcAndPrint([20,30,40]);