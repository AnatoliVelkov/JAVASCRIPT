function input(searchString, char, stringToMatch){
   let modificatedString = searchString.replace('_', char);

   if(modificatedString === stringToMatch){
       console.log('Matched');
   }
   else{
       console.log('Not Matched')
   }

}
input('Str_ng', 'i', 'String');