//Write a function that receives an array of strings and prints the sum of first and last element in that array
function solve(input){
    let firstNum=Number(input.shift());
    let lastNum=Number(input.pop());

    console.log(firstNum+lastNum);
}
solve(['20','30','40']);