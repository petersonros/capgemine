function checkAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < str1.length; i++) {
        sum1 = sum1 + str1.charCodeAt(i);
    }
    for (let j = 0; j < str2.length; j++) {
        sum2 = sum2 + str2.charCodeAt(j);
    }
    if (sum1 === sum2) {
        return "Anagram";
    } else {
        return "Not Anagram";
    }
}