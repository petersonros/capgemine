

// compara as palavras de dois arrays pelo indice e diz se é anagrama ou não


let first = ['Sower', 'dad', 'drown', 'elbow']
let second = ['Swore', 'add', 'down', 'below']

// XOR all characters in both words
function isAnagram(first, second) {
  // Word lengths must be equal for anagram to exist
  if (first.length !== second.length) {
    return false
  }

  let a = first.charCodeAt(0) ^ second.charCodeAt(0)

  for (let i = 1; i < first.length; i++) {
    a ^= first.charCodeAt(i) ^ second.charCodeAt(i)
  }

  // If a is 0 then both words have exact matching characters
  return a ? false : true
}

// Check each pair of words for anagram match
for (let i = 0; i < first.length; i++) {
  if (isAnagram(first[i], second[i])) {
    console.log(`'${first[i]}' and '${second[i]}' are anagrams`)
  } else {
    console.log(`'${first[i]}' and '${second[i]}' are NOT anagrams`)
  }
}