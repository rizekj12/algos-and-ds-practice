// Write a function that takes in a non-empty array of distinct
// integers and an integer representing a target sum. The function
// should find all triplets in an array that sum up to the target sum
// and returns a two-dimensional array of all triplets. 



function threeSum(arr, target){
    let sumsArrs = []
    let sortedArr = arr.sort((a,b) => a - b)
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            let tempArr = [sortedArr[i],sortedArr[i+1],sortedArr[j]]
            let tempSum = tempArr.reduce(
                (accumulator, currentValue) => accumulator + currentValue
            )
            if(tempSum === target){
                sumsArrs.push(tempArr)
            }
        }
    }
    return sumsArrs
}


function threeSum2(arr, target){
    let sumArrs = []
    let sortedArr = arr.sort((a,b) => a - b)
    for(i = 0; i < arr.length - 2; i++){
        let left = i + 1
        let right = sortedArr.length - 1
        while(left < right){
            let tempArr = [sortedArr[i],sortedArr[left],sortedArr[right]]
            let tempSum = tempArr.reduce(
                (accumulator, currentValue) => accumulator + currentValue
            )
            if(tempSum === target){
                sumArrs.push(tempArr)
                left++
                right--
            }else if(tempSum < target){
                left++
            }else{
                right--
            }
        }
    }
    return sumArrs
}

console.log(threeSum2([7,5,12,1,3,8,2,6], 10))
