const detectCycle = function(head) {
	let slow = head;
	let fast = head;
	while (fast != null && fast.next != null) {
		slow = slow.next;
		fast = fast.next.next;
		if (fast == slow) {
			let slow2 = head;
			while (slow2 != slow) {
				slow2 = slow2.next;
				slow = slow.next;
			}
			return slow2;
		}
	}
	return null;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
const five = new ListNode(5);
const six = new ListNode(6);
const seven = new ListNode(7);
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;
seven.next = four;

const test1 = detectCycle(two);
console.log(test1);