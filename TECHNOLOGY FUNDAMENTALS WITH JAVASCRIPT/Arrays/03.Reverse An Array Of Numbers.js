//Receive a number n and an array of elements, create a new array with n numbers, reverse it and print
//its elements on a single line, space-separated.
function solve(num, input){
    let newArr=[];

    for(i=0; i < num; i++){

        newArr[i]=input[i];
    }
    newArr.reverse();
    let str="";

    for(i=0; i < newArr.length; i++){
        str+=newArr[i] + " ";

    }
    console.log(str);

}
solve(3,[10, 20, 30, 40, 50]);