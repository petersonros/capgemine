
// organiza as letras formando todas as combinações possiveis

//var arr = ['cat', 'dog', 'tac', 'god', 'act'];
var arr = ['ovo', 'ov']; // posso colocar quantas palavras eu quiser no array


var allAnagrams = function(arr) {
    var anagrams = {};
    arr.forEach(function(str) {
        var recurse = function(ana, str) {
            if (str === '') 
                anagrams[ana] = 1;
            for (var i = 0; i < str.length; i++)
                recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        };
        recurse('', str);
    });
    return Object.keys(anagrams);
}

console.log(allAnagrams(arr));
//["cat", "cta", "act", "atc", "tca", "tac", "dog", "dgo", "odg", "ogd", "gdo", "god"]