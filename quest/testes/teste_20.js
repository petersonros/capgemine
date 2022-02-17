var check=true;
var str="cleartrip";
var str1="tripclearw";

if(str.length!=str1.length){

    console.log("Not an anagram"); // se o comprimento das palavras for diferente ele já para aqui

    check=false;
}

console.log(str.split("").sort()); // serpara todas as letras
console.log(str.split("").sort().join('')); // ordena as letras em ordem alfabetica

if(check){
    if((str.split("").sort().join(''))===((str1.split("").sort().join('')))){
    
        console.log("Anagram")
}
else{

    console.log("not a anagram");
}
}