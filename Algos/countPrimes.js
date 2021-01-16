// Count the number of prime numbers less than a non-negative number, n.

//my first attempt which uses a helper function that checks if a number
//if prime then uses that function on each number up to n.
//This doesn't work on large numbers past 10,000 because it exceeds 
//time limits due to excessive run time

var checkPrime = (n) => {
    for(i = 2; i < n; i++){
      if (n % i === 0){
        return false 
      }
    }
    return true
  }
  
  var countPrimes = (n) => {
    var count = 0 
    
    if(n <= 1) return 0
  
    for(let i = 2; i <= n;i++){
      if(checkPrime(i)){
        count++
      }
    }
    return count
  }

  //this solution works


  var countPrimes2 = (n) => {
    let nums = []
    let primeCount = 0
    
    for(let i = 0; i < n;i++){
        nums[i] = true 
    }
    
    for(let i = 2; i * i < n; i++){
        if(nums[i] === true){
            for(let j = 2; j * i < n; j++){
                nums[i * j] = false
            }
        }
    }
    
    for(let i = 2; i < n; i++){
        if(nums[i] === true){
            primeCount++
        }
    }
    
    return primeCount
}