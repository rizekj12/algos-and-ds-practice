class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

//make a funtion that checks if a singly-linked list is a cycle.
//This means a singly-linked list with a nodes .next pointing to a previous node. 

  function checkCycle(firstNode){
    let slowRunner = firstNode
    let fastRunner = firstNode

    while(fastRunner && fastRunner.next){
        slowRunner = firstNode.next
        fastRunner = firstNode.next.next

        if(fastRunner === slowRunner){
            return true
        }
    }
    return false
  }


  