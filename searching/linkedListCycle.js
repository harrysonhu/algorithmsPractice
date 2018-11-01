const hasCycle = function(head) {
	let slow = head;
	let fast = head;
	while (fast != null && fast.next != null) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow == fast) {
			return true;
		}
	}
	return false;
}

function ListNode(val) {
	this.val = val;
	this.next = null;
}

const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
two.next = three;
three.next = four;
four.next = two;

const test1 = hasCycle(two);
console.log(test1); // true

const five = new ListNode(5);
four.next = five;

const test2 = hasCycle(two);
console.log(test2); // false

const test3 = hasCycle(null);
console.log(test3); // false