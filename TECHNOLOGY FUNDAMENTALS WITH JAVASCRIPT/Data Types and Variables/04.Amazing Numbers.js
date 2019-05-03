function input(num){
    let result=0;
    num=num.toString();
    for(i=0; i < num.length; i++){
        result=result+Number(num[i]);
    }
    if(result.toString().includes('9')){
        console.log(`${num} Amazing? True`);
    }
    else{
        console.log(`${num} Amazing? False`);
    }

}
input(999);