const reorderList = head => {
	if (head == null || head.next == null) {
		return;
	}	
	let slow = head;
	let fast = head;
	while (fast.next != null && fast.next.next != null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	let halfHead = slow.next;
	let pre = slow;
	let tail = null;
	while (halfHead != null) {
		let next = halfHead.next;
		halfHead.next = tail;
		tail = halfHead;
		halfHead = next;
	}
	let p1 = head;
	let p2 = tail;
	while (p1 != pre) {
		pre.next = p2.next;
		p2.next = p1.next;
		p1.next = p2;
		p1 = p2.next;
		p2 = pre.next;
	}
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

let test1 = reorderList(one);
let result = [];
while (test1 != null) {
	result.push(test1.val);
	test1 = test1.next;
}
console.log(result); // [1, 5, 2, 4, 3]