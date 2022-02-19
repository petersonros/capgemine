const checkAnagram = (orig, test) => {
    return orig.length === test.length 
      && orig.split('').reduce(
        (acc, item) => {
          let index = acc.indexOf(item);
          if (index >= 0) {
            acc.splice(index, 1);
            return acc;
          }
          throw new Error('Not an anagram');
        },
        test.split('')
      ).length === 0;
  };
  
  const isAnagram = (tester, orig, test) => {
    try {
      return tester(orig, test);  
    } catch (e) {
      return false;
    }
  }
  
  console.log(isAnagram(checkAnagram, '867443', '473846'));
  console.log(isAnagram(checkAnagram, '867443', '473846'));
  console.log(isAnagram(checkAnagram, '867443', '475846'));