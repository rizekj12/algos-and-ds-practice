//make a function that accepts a tree and target number.
//this function will find the value in tree closest to the target



function findClosestValueInBst(tree, target) {
    
      let minDiff = Infinity
      let current = tree
      let closestVal = null
      while(current){
          
          let tempDiff = Math.abs(target - current.value)
        if (tempDiff < minDiff){
              minDiff = tempDiff
              closestVal = current.value
          }
          
          if(target < current.value ){
              current = current.left
          }else{
              current = current.right
          }
      
      }
      
      return closestVal
  }
  
 
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  


let tree = new BST(10)
let node1 = new BST(6)
let node2 = new BST(22)

tree.right = node1
tree.left = node2