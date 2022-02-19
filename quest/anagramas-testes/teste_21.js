/**
 * Anagram Finder
 * @params {array} wordArray
 * @return {object}
 */
 

function filterAnagram(wordArray) {
    let outHash = {};
    for ([index, word] of wordArray.entries()) {
      let w = word.split("").sort().join("");
      outHash[w] = !outHash[w] ? [word] : outHash[w].concat(word);
    }
    let filteredObject = Object.keys(outHash).reduce(function(r, e) {
      if (Object.values(outHash).filter(v => v.length > 1).includes(outHash[e])) r[e] = outHash[e]
      return r;
    }, {});
  
    return filteredObject;
  }
  
  console.log(filterAnagram(['monk', 'yzx','konm', 'aaa', 'ledl', 'bbc', 'cbb', 'dell', 'onkm']));