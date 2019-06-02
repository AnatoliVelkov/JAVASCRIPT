//Write a function that receives three parameters and write an arrow function that calculate result
//depending of operator. Operator can be &#39;multiply&#39;, &#39;divide&#39;, &#39;add&#39;, &#39;subtract&#39;.
//The input comes as parameters named numOne, numTwo, operator.

function solve(firstNum, secNum, operator){
    let operation;
    switch(operator){
        case 'multiply':
        operation=(a,b) => a*b;
        break;
        case 'divide':
        operation=(a,b) => a/b;

        break;
        case 'add':
        operation=(a,b) => a+b;

        break;
        case 'subtract':
        operation=(a,b) => a-b;

        break;
    }

    console.log(operation(firstNum,secNum));


}
solve(5, 5, 'multiply');