'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let a = str.split(" ")
    let b = parseInt((a.length )/2)
    return a[b].length
    
    }

// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {    
    
        let NO_OF_CHARS = 256;
        let count = new Array(NO_OF_CHARS);
        for(let i = 0; i < NO_OF_CHARS; i++)
        {
            count[i] = 0;
        }
        let i;
    
        
        for(i = 0; i < str1.length; i++)
        {
            count[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            count[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }
    
        
        if (str1.length != str2.length)
            return false;
    
       
        for(i = 0; i < NO_OF_CHARS; i++)
            if (count[i] != 0)
            {
                return false;
            }
        return true;
    }
    
        
    
    
    
    
    // This code is contributed by avanitrachhadiya2155
    
    
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been

// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };