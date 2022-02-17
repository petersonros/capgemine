function findAnagrams (str, arr){
    let newStr = "";
    let output = [];
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < str.length; k++) {
          if (str[k] === arr[i][j] && str.length === arr[i].length) {
            newStr += arr[i][j];
          }
        }
      } if(newStr.length === str.length){
        output.push(newStr);
        newStr = "";
      }
      }
      return output;
    }