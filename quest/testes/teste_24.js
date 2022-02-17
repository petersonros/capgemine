/*This is good option since 
  logic is easy,
  deals with duplicate data,
  Code to check anagram in an array,
  shows results in appropriate manner,
  function check can be separately used for comparing string in this regards with all benefits mentioned above.
  */

  var words = ["deuoll", "ellduo", "abc","dcr","frt", "bu","cba","aadl","bca","elduo","bac","acb","ub","eldou","ellduo","ert","tre"];
  var counter=1;
  var ele=[];
  function check(str1,str2)
  {   
      if(str2=="")
      return false;
      if(str1.length!=str2.length)
        return false;
      var r1=[...(new Set (str1.split('').sort()))]; 
      var r2=[...(new Set (str2.split('').sort()))]; 
      var flag=true;
  
      r1.forEach((item,index)=>
      {
      if(r2.indexOf(item)!=index)
      { flag=false;}
      });
  
      return flag;
  }
  
  var anagram=function ()
  {
    for(var i=0;i<words.length && counter!=words.length ;i++)
    {
    if(words[i]!="")
    {
      //document.write("<br>"+words[i]+":");
      console.log(words[i]+":"); // linha que eu adicionei
      counter++;
    }
      for(var j=i+1;j<words.length && counter !=words.length+1;j++)
      {
         if(check(words[i],words[j]))
         {
                ele=words[j];
               //document.write(words[j]+"&nbsp");
               console.log(words[j])
               words[j]="";
                counter++;   
         }
       }
    }
  }
  anagram();