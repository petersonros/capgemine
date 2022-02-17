
// compara se duas palavras são anagramas 

function isAnagram(str1, str2) {
    var str1 = str1.toLowerCase();
    var str2 = str2.toLowerCase();
  
    if (str1 === str2)
      return true;
  
    var dict = {};
  
    for(var i = 0; i < str1.length; i++) {
      if (dict[str1[i]])
        dict[str1[i]] = dict[str1[i]] + 1;
      else
        dict[str1[i]] = 1;
    }
  
    for(var j = 0; j < str2.length; j++) {
      if (dict[str2[j]])
        dict[str2[j]] = dict[str2[j]] - 1;
      else
        dict[str2[j]] = 1;
    }
  
    for (var key in dict) {
      if (dict[key] !== 0) 
        return false;
    }
  
    return true;
  }
  
  console.log(isAnagram("hello", "olleh"));