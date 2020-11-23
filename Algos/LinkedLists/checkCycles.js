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
        slowRunner = slowRunner.next
        fastRunner = fastRunner.next.next

        if(fastRunner === slowRunner){
            return true
        }
    }
    return false
  }


  let a = new LinkedListNode("A")
  let b = new LinkedListNode("B")
  let c = new LinkedListNode("C")
  let d = new LinkedListNode("D")
  let e = new LinkedListNode("E")

  a.next = b
  b.next = c
  c.next = d
  d.next = b

  let one = new LinkedListNode(1)
  let two = new LinkedListNode(2)
  let three = new LinkedListNode(3)

  one.next = two
  two.next = three

console.log(checkCycle(one))