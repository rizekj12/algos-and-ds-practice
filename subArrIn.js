//Given two non-empty arrays integers , write a function that determines 
//whether the second array is a subsequence of the first array


// function isValidSubArr(arr1, arr2){
//     let lastIndex = -Infinity
//     let validCheck = false

//     for(i = 0;i < arr1.length; arr++){
//         if(arr2.includes(arr1[i]) 
//         && arr2.indexOf(arr[i]) > lastIndex){
//             lastIndex = arr2.indexOf(arr[i])
//             validCheck = true
//         }
//     }
 
//     return validCheck
// }

// finalized version that works best, this is 0(n) because
// it only loops through the longer array once. 

function isValidSubArr2(arr1, arr2){
    let lastIndex = -Infinity
    let tempArr = []
    for(i = 0;i < arr1.length; i++){
        if(tempArr.length < arr2.length && arr2.includes(arr1[i]) 
        ){
            lastIndex = arr2.indexOf(arr1[i])
            tempArr.push(arr1[i])
        }
    }
    return JSON.stringify(tempArr)==JSON.stringify(arr2)
}

console.log(isValidSubArr2([1,1,1,1,1], [1,1,1]))