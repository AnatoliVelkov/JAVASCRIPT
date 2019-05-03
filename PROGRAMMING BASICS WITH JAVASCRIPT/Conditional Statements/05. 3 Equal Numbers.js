function input (digits)
{
    let firstNum=digits[0];
    let secNum=digits[1];
    let thirthNum=digits[2];

    if (firstNum == secNum && firstNum == thirthNum && secNum == thirthNum)
    {
        console.log(`yes`);  

    }
    else
    {
        console.log(`no`);

    }
}
input(["1","1","1"]);