/* function sortStrChars(str) {
    if (!str) {
      return;
    }
    str = str.split('');
    str = str.sort();
    str = str.join('');
    return str;
  }

  //const words = ["dell", "ledl", "abc", "cba", 'boo'];
  const words = ["ifailuhkqq", "ovo", "ifailuhkqq"];
  
  function getGroupedAnagrams(words) {
    const anagrams = {}; // {abc:[abc,cba], dell:[dell, ledl]}
    words.forEach((word) => {
      const sortedWord = sortStrChars(word);
      if (anagrams[sortedWord]) {
        return anagrams[sortedWord].push(word);
      }
      anagrams[sortedWord] = [word];
    });
    return anagrams;
  }
  
  const groupedAnagrams = getGroupedAnagrams(words);
  for (const sortedWord in groupedAnagrams) {
    console.log(groupedAnagrams[sortedWord].toString());
  } */
// fim do primeiro teste

// inicio do sengundo teste
function group_anagrams(arr) {
let   sortedArr = arr.map(item => item.split('').sort().join(''));
let setArr = new Set(sortedArr);
let reducedObj = {};

for (let setItem of setArr) {
    let indexArr = sortedArr.reduce((acc, cur, index) => {
    if (setItem === cur) {
        acc.push(index);
        console.log(index); // linha que eu inseri
    }
    return acc;
    }, []);
    
    reducedObj[setItem] = indexArr;
    console.log(indexArr); // linha que eu inseri
}

let finalArr = [];
console.log(finalArr);

for (let reduceItem in reducedObj) {
    finalArr.push(reducedObj[reduceItem].map(item => arr[item]));
}
return finalArr;
}
group_anagrams(['car','cra','rca', 'cheese','ab','ba']);