'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let a= str.split(' ');
    let s = a.slice(-1).toString();
    return s;
    }

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let a= str.split(' ');
    let s = a.slice(-1).toString();
    return s;
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    var s=str.split(" "); 
   let r =[]
     s.forEach((val,i)=>{
       if(val == "I"){
    s.splice(i,1,"We");
   }else if (val=="am"){
    s.splice(i,1,"are");
   }else if (val=="was"){
    s.splice(i,1,"were");
   }
   })
   let a=s.join(" ")
   return a
   }

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    // let r =arr.indexOf("it")
    let a=5;
    for (let i=0; i<(arr.length/6); i++){
      if (a<=arr.length){
         let y= arr[a-1]
    let m = arr.splice(a-1,1,`${y},`)
    a+=6
    }
    }
    let e =arr.join(" ");
    return e;
    }

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    let h=""
    let arr =[];
    var counts = 0;
    let l=str.split('')
    l.push(' ')
    let a=l[0]
    
    l.forEach((char,i) => {
      console.log()
     if (a==char){
       counts+=1
     }else if(char==" "){ 
       arr.push(`${a}`+counts)
      a=l[i+1]
      counts=0
    
    }else {

        arr.push(`${a}`+counts)
      a=char
      counts=1
    
    } 
     
    });
    
       let s=arr.join(" ")
        return s
    
  }



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };