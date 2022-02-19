function isAnagram(str1, str2){
    let count = 0;
  
    if (str1.length !== str2.length) {
      return false;
    } else {
      let val1 = str1.toLowerCase().split("").sort();
      let val2 = str2.toLowerCase().split("").sort();
      for (let i = 0; i < val2.length; i++) {
        if (val1[i] === val2[i]) {
          count++;
        }
      }
    if (count == str1.length) {
      return true;
     }
   }
   return false;
  }
  
  console.log(isAnagram("cristian", "Cristina"))

  // compara duas palavras e retorna verdadeiro ou falso