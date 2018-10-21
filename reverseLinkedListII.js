const reverseBetween = function(head, m, n) {
	if (head == null || head.next == null) {
		return head;
	}
	let dummy = new ListNode(0);
	dummy.next = head;
	let pre = dummy;
	let start = head;
	let end = head;
	for (let i = 0; i < m - 1; i++) {
		pre = pre.next;
		start = start.next;
	}
	for (let i = 0; i < n; i++) {
		end = end.next;
	}
	while (m <= n) {
		let temp = start.next;
		start.next = end;
		end = start;
		start = temp;
		m++;
	}
	pre.next = end;
	return dummy.next;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
const five = new ListNode(5);
one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = null;

const test1 = reverseBetween(one, 2, 4);
while (test1 != null) {
	console.log(test1.val);
	test1 = test1.next;
}