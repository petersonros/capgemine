const wordToHash = word => {
    const hash = {};
    // Make all lower case and remove spaces
    [...word.toLowerCase().replace(/ /g, '')].forEach(letter => hash[letter] ? hash[letter] += 1 : hash[letter] = 1);
    return hash;
  }
  const hashesEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
    let match = true;
    if(keys1.length !== keys2.length) return false;
    for(const key in keys1) { if(obj1[key] !== obj2[key]) match = false; break; }
    return match;
  }
  const checkAnagrams = (word1, word2) => {
    const hash1 = wordToHash(word1), hash2 = wordToHash(word2);
    return hashesEqual(hash1, hash2);
  }
  console.log( checkAnagrams("Dormitory", "Dirty room") );