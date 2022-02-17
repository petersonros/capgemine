

// serapar os anagramas do array em pares

// Words to match
var words = ["dell", "ledl", "abc", "cba"],
    map = {};

//Normalize all the words 
var normalizedWords = words.map( function( word ){
  return word.split('').sort().join('');
});

//Create a map: normalizedWord -> real word(s)
normalizedWords.forEach( function ( normalizedWord, index){
  map[normalizedWord] = map[normalizedWord] || [];
  map[normalizedWord].push( words[index] );
});

//All entries in the map with an array with size > 1 are anagrams
Object.keys( map ).forEach( function( normalizedWord , index  ){
  var combinations = map[normalizedWord];
  if( combinations.length > 1 ){
    console.log( index + ". " + combinations.join(' ') );
  }
});