function anagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    } else {
      if (
        str1.toLowerCase().split("").sort().join("") ===
        str2.toLowerCase().split("").sort().join("")
      ) {
        return "É um anagrama";
      } else {
        return "Não é um anagrama";
      }
    }
  }
  
  console.log(anagram("hello", "olleh"));
  console.log(anagram("kodak", "konar"));