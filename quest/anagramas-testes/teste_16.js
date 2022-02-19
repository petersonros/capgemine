let words = ["dell", "ledl","del", "abc", "cba", 'boo'];
    
    //sort each item 
    function sortArray(data){
      var r=data.split('').sort().join().replace(/,/g,'');
      return r;
    }
    
    var groupObject={};
    words.forEach((item)=>{
    let sorteditem=sortArray(item);
    
    //Check current item is in the groupObject or not.
    //If not then add it as an array
    //else push it to the object property
    if(groupObject[sorteditem])
      return groupObject[sorteditem].push(item);
        groupObject[sorteditem]=[sorteditem];
    });
    
    //to print the result
    for(i=0; i<Object.keys(groupObject).length; i++)

       //document.write(groupObject[Object.keys(groupObject)[i]] + "<br>");
    
       console.log(groupObject[Object.keys(groupObject)[i]]); // eu inseri essa linha
    
    
    /* groupObject value: 
    abc: (2) ["abc", "cba"]
    boo: ["boo"]
    del: ["del"]
    dell: (2) ["dell", "ledl"]
    
    OUTPUT:
    ------
    dell,ledl
    del
    abc,cba
    boo
    */