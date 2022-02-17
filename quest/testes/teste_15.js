function anagram (array) {
    var organized = {};
    for (var i = 0; i < array.length; i++) {
        var word = array[i].split('').sort().join('');
        if (!organized.hasOwnProperty(word)) {
            organized[word] = [];
            //console.log(word); // mostra somente uma palavra de cada, exclui os anagramas
        }
        organized[word].push(array[i]);
        //console.log(word); // organizou todas as palavras do array
    }    
    return organized;
}

console.log(anagram([])); // não entedi

anagram(['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'ok', 'ko'])

// o resultado esperado é o abaixo, mas não está funcionando.
/* 
{
    dell: ['dell', 'ledl'],
    kmno: ['kmno', okmn', 'omkn'],
    ko: ['ok', ko']
} 
*/