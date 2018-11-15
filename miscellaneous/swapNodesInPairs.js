function Node(value) {
	this.value = value;
  this.next = null;
}

const swapNodesInPairs = head => {
	if (head === null || head.next === null) {
  	return head;
  }
	let copy = head;
  let prev = null;
  while (copy != null && copy.next != null) {
  	let temp = copy.next;
    copy.next = copy.next.next;
    temp.next = copy;
    if (copy == head) {
    	head = temp;
    }
    if (prev != null) {
    	prev.next = temp;
    }
    prev = copy;
    copy = copy.next;
  }
  
  return head;
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);

one.next = two;
two.next = three;
three.next = four;

const test1 = swapNodesInPairs(one);
console.log(test1);