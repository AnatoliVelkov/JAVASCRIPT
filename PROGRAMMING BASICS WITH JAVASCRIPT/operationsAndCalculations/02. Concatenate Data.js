function greetings(person){
    let firstName=person[0];
    let lastName=person[1];
    let age=person[2];
    let town=person[3];
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);

}
greetings(["Maria","Ivanova","19","Pleven"]);