//You are given two integers n and k. Write a JS function that generates and prints the following sequence:
// The first element is 1
// Every following element equals the sum of the previous k elements
// The length of the sequence is n elements
//The input comes as two number arguments. The first element represents the number n, and the second
//– the number k.
//The output is printed on the console on a single line, separated by space.
function solve(n,k){
    let arr=[1];
    let num=1;
    let index=0;

    for(i = 0; i < n-1; i++){
        if(arr.length < k){
            arr.push(num);
            num++;
        }
        else{
            index=arr.length-k;
            num=arr.slice(index, arr.length);
            let sum=0;
            for(let elements of num){
                sum+=elements;
            }
            arr.push(sum);
            
        }
    }

    console.log(arr.join(' '));

}
solve(8, 2);