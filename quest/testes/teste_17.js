function findAnagram(str1, str2) {

    let mappedstr1 = {}, mappedstr2 = {};
  
    for (let item of str1) {
      mappedstr1[item] = (mappedstr1[item] || 0) + 1;
    }
  
    for (let item2 of str2) {
      mappedstr2[item2] = (mappedstr2[item2] || 0) + 1;
    }
  
    for (let key in mappedstr1) {
      if (!mappedstr2[key]) {
        return false;
      }
  
      if (mappedstr1[key] !== mappedstr2[key]) {
        return false;
      }
    }
  
    return true;
  }
  console.log(findAnagram("alergia", "alegria"));

  // comprar duas palavras e confirma se são anagramas
