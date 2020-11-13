// Write a function kthToLastNode() that takes an integer kk 
// and the headNode of a singly-linked list, and returns
// the kkth to last node in the list.

class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  const a = new LinkedListNode('Angel Food');
  const b = new LinkedListNode('Bundt');
  const c = new LinkedListNode('Cheese');
  const d = new LinkedListNode("Devil's Food");
  const e = new LinkedListNode('Eccles');
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

  function KthtoLast(headNode, num){
      if(headNode === null) return undefined
      let length = 0
      let current = headNode
      let kth = headNode

      while(current){
          current = current.next
          length++
      }

      for(i = 0; i < length - num; i++){
        kth = kth.next
      }
      return kth
  }

  console.log(KthtoLast(a, 3))