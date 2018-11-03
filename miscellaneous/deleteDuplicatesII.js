function ListNode(val) {
	this.val = val;
	this.next = null;
}

const deleteDuplicates = head => {
	let dummy = new ListNode(0);
	let d = dummy;
	while (head != null) {
		if (head.next != null && head.val == head.next.val) {
			while (head.next != null && head.val == head.next.val) {
				head = head.next;
			}
		} else {
			d.next = head;
			d = d.next;
		}
		head = head.next;
	}
	d.next = null;
	return dummy.next;
};

const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const threeA = new ListNode(3);
const four = new ListNode(4);
const fourA = new ListNode(4);
const five = new ListNode(5);

one.next = two;
two.next = three;
three.next = threeA;
threeA.next = four;
four.next = fourA;
fourA.next = five;

let test1 = deleteDuplicates(one);
while (test1 != null) {
	console.log(test1.val);
	test1 = test1.next;
	// 1, 2, 5
}

const test2 = deleteDuplicates(null);
console.log(test2);
