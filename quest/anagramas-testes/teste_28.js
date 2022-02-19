let validAnagram = (firstString, secondString) => {
    if (firstString.length !== secondString.length) {
        return false;
    }

    let secondStringArr = secondString.split('');

    for (var char of firstString) {
        charIndexInSecondString = secondString.indexOf(char);
        if (charIndexInSecondString === -1) {
            return false;
        }
        secondString = secondString.replace(char, '');
    }

    
    return true;
}