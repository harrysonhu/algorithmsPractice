const partitionList = function(head, x) {
	let dummy1 = new ListNode(0);
	let dummy2 = new ListNode(0);
	let curr1 = dummy1;
	let curr2 = dummy2;
	while (head != null) {
		if (head.val < x) {
			curr1.next = head;
			curr1 = curr1.next;
		} else {
			curr2.next = head;
			curr2 = curr2.next;
		}
		head = head.next;
	}
	curr1.next = dummy2.next;
	curr2.next = null;
	return dummy1.next;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

const one = new ListNode(1);
const two = new ListNode(2);
const twob = new ListNode(2);
const four = new ListNode(4);
const three = new ListNode(3);
const five = new ListNode(5);

one.next = two;
two.next = twob;
twob.next = four;
four.next = three;
three.next = five;

const test1 = partitionList(null, 4);
console.log(test1); // null

const test2 = partitionList(one, 3);
let result = [];
while (test2 != null) {
	result.push(test2.val);
	test2 = test2.next;
}
console.log(result); // [1, 2, 2, 4, 3, 5]