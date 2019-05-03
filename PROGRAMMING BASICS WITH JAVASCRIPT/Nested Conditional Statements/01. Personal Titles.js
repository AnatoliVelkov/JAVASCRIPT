function input(data){

    if(data[1] == "m"){
        if(data[0] >= 16){
            console.log(`Mr.`);
        }
        else if(data[0] < 16){
            console.log(`Master`);
        }
    }
    else if(data[1] == "f"){
        if(data[0] >= 16){
            console.log(`Ms.`);
        }
        else if(data[0] < 16){
            console.log(`Miss`);
        }
    }

}
input(["17","m"]);