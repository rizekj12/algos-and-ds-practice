// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.


//attempted answer 
// var sumOddLengthSubarrays = function(arr) {
//     let sum = 0
//     let subArrL = 1
//     let left = 0
//     let right = 0

//     while(){
      
//     }

// };
sum = 57
                           
                                          j         
                          [0,1,5,7,12,15]
                                      i



                    
// sumOddLengthSubarrays([1,4,2,5,3])
                        
                      [1,5,7,12,15]
                                //   i

                                //   1
                                //   1,4,2
                                //   1.4.2.5.3
                                //   4
                                //   4,2,5
                                //   2,
                                //   2,5,3,
                                //   5
                                //   3

// Output: 58

//sumOddLengthSubarrays([1,2])
//Output: 3

//need to study more of this answer
//this is a dynamic programing problem 

const sumOddLengthSubarrays = (arr, sum = 0) => {
    const n = arr.length;
    
    //Generate the prefix sum array
    const prefix = Array(n+1).fill(0);
    for (let i = 0; i < n; i++)
        prefix[i+1] = prefix[i]+arr[i];
    
    //Loop through all odd-length sequences and add sums to answer, then return
    for (let i = 0; i < n; i++)
        for (let j = i+1; j < n+1; j+=2)
            sum += (prefix[j]-prefix[i]);
    return sum;
};