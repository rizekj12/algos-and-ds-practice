class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          // current = null
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          // current = null
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val){
      if(this.root === null) return false

    let current = this.root
    while(current){
        if(current.val === val){
            return true
        }else if(val < current.val){
            current = current.left

        }else{
            current = current.right
        }

    }
    return false
  }

}



let tree = new BST();

