
const arr = ['monk', 'konm', 'nkom', 'bbc', 'cbb', 'dell', 'ledl', 'llde'];
let anagram = {};

for (let i = 0; i<arr.length; i++){
  const word = arr[i];
  const sortedWord = word.split("").sort().join("");
  let tempArray = [];
  if(anagram[sortedWord]){
    tempArray = anagram[sortedWord].length==1?anagram[sortedWord]:[...anagram[sortedWord]];
    tempArray.push(word);
    anagram[sortedWord] = tempArray;
  }else{
    anagram[sortedWord] = [word];
  }
}
console.log(Object.values(anagram));