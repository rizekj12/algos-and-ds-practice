//a function that reverses a singly-linked list

class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  function reverse(headNode){
      let current = headNode
      let prev = null
      let next = null

      while(current){
          next = current.next
          current.next = prev
          prev = current
          current = next
      }

      return prev
  }


  let a = new LinkedListNode('A')
  let b = new LinkedListNode('B')
  let c = new LinkedListNode('C')
  let d = new LinkedListNode('D')

  a.next = b
  b.next = c
  c.next = d

  console.log(a)

  console.log(reverse(a))