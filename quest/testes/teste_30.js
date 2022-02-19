const input = "monk, konm, nkom, bbc, cbb, dell, ledl, llde";

const anagramCreater = (data) => {return data.split("").sort().join("");}

const anagram = input
.split(", ")
.reduce((acc, word) => {
  const anagramWord = anagramCreater(word);
  acc[anagramWord] = acc[anagramWord] 
    ? `${acc[anagramWord]},${word}` 
    : word;
  return acc;
}, {});
console.log(Object.values(anagram).join("\n"));