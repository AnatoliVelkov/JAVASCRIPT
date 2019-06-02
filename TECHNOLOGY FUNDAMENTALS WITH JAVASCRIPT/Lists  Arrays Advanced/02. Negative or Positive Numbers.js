//Write a JS function that processes the elements in an array one by one and produces a new array.
//Prepend each negative element at the front of the result and append each positive (or 0) element at the
//end of the result.
//The input comes as array of number elements.
//The output is printed on the console, each element on a new line.
function solve (arr){
   let result=[];

   for (const element of arr){
       if(element < 0){
           result.unshift(element);
       }
       else{
           result.push(element);
       }
   }
   for(let i = 0; i < result.length; i++){
       console.log(result[i]);
   }

}
solve([3, -2, 0, -1]);