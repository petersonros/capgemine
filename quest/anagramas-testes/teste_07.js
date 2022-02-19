
// testa se duas palavras são Anagramas ou não

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const result = {};
    for (let i=0;i<str1.length;i++) {
        let char = str1[i];
        result[char] = result[char] ? result[char] += 1 : result[char] = 1;
    }

    for (let i=0;i<str2.length;i++) {
        let char = str2[i];
        if (!result[char]) {
            return false;
        }
        else {
            result[char] = -1;
        }
    }
    return true;
}

// compara duas palavras e diz se são anagramas ou não
console.log(anagram('caro','roca'));