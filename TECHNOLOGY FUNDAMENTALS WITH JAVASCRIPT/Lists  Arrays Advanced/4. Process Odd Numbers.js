//You are given an array of numbers. Write a JS function that prints the elements at odd positions from
//the array, doubled and in reverse order.
//The input comes as array of number elements.
//The output is printed on the console on a single line, separated by space.
function solve(arr){
    let sumArr=[];

    for(i = 0; i < arr.length; i++){
        if(i % 2 != 0){
            sumArr.push(arr[i] * 2);
        }

    }

}
solve([10, 15, 20, 25])