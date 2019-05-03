//Write a program which receives a number and prints the corresponding name of the day of week. If the
//number is not a valid day, print 'Invalid day!';
function solve(day){

    let arr=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    if(day >= 1 && day <=7){
       
        console.log(`${arr[day-1]}`);
    }
    else{
        console.log(`Invalid day!`);

    }

}
solve(1);