'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 1) ---------------------
// 
//  Given an array of objects, count the objects by using reduce method.

//  EX:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//[1, 2, 3, 4, 5]

// ------------------------

const objectCounter = (obj) => {
    let count =0;
    let num =0;
     obj.reduce((previous, current, index, array) => {
        count = index;
        //  num=index;
      }) 
      return count+1;
    // write your code here

}

// 2) ---------------------
// 
// Given a string input as an argument reverse it using reduce method.
//
//  EX:
// 'you shall not pass' ==> 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
    
        return str.split(' ').reduce((c, r)=> r +" "+ c,);
    
    

    }
    // write your code here



// 3) ---------------------
// 
// Using the same array of object from the first question, create new object that contain the candidates name as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//
// ------------------------

const statistics = (obj) => {
  let a=" "
  let james=0;
  let jade=0;
  let bailey=0;
  
  obj.reduce((pre,cur,ind)=>{
    a=cur.votes_To;
    console.log(a)
    if(a=='James'){
      james+=1;
     }else if(a=='Jade'){
      jade+=1;
     }else if(a=="Bailey"){
      bailey+=1;
     }
    
    
  },{})
   let x={a:james, a:jade, a:bailey}

   
  return x;
}



module.exports = { objectCounter, stringReverse, statistics };

