

// retorna a posição das letras...

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
