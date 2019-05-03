function input (firstStr, secStr, thirdStr){
    let time=(firstStr.length*secStr.length)*thirdStr.length/2;

    let result=Math.ceil(time/2.5);
    console.log(`The plate was rotated ${result} times.`)

}
input('Black Sabbath', 'Paranoid', 'War Pigs');