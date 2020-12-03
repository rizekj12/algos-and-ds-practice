// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", 
// each substring contains same number of 'L' and 'R'.


var balancedStringSplit = function(s) {
    let count = 0
    let lCount = 0
    let rCount = 0
    for(i = 0; i < s.length; i++){
          if(s[i] === "L"){
              lCount++
          }else{
              rCount++
          }
        
        if(rCount === lCount){
      count++
      }
     
    }
  
   return count
       
  }
  