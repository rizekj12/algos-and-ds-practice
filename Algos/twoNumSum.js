function twoNumSum(arr, target){
    for(i = 0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [arr[i], arr[j]]
            }
        }
    }

}

function twoNumSum2(arr, target){
    let start = 0
    let end = arr.length - 1

    while(start < end){
        if(arr[start] + arr[end] < target){
            start++
        }else if(arr[start] + arr[end] > target){
            end--
        }else if( arr[start] + arr[end] === target){
            return [arr[start], arr[end]]
        }else{
            return "target not found"
        }
    }

}

console.log(twoNumSum2([3,5,-4,8,11,1,-1,6], 10))