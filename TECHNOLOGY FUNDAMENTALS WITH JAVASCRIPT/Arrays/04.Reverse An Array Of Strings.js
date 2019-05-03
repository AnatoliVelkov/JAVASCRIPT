//Receive an array of strings (space separated values), reverse it and print its elements. Swap elements.
//For example the first element should be last and the last element should be first etc.
function solve(arr){
    arr.reverse();
    let str="";

    for(i=0; i<arr.length; i++){

        str+=arr[i] + " ";
    }
    console.log(str);
}
solve(['a','b','c','d','e']);