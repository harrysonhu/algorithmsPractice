const sortList = head => {
	if (head == null || head.next == null) {
		return head;
	}
	let slow = head;
	let fast = head.next;
	while (fast != null && fast.next != null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	let list2 = slow.next;
	slow.next = null;
	return merge(sortList(head), sortList(list2));
};

const merge = (list1, list2) => {
	let dummy = new ListNode(0);
	let curr = dummy;
	while (list1 != null && list2 != null) {
		if (list1.val < list2.val) {
			curr.next = list1;
			list1 = list1.next;
		} else {
			curr.next = list2;
			list2 = list2.next;
		}
		curr = curr.next;
	}
	if (list1 != null) {
		curr.next = list1;
	}
	if (list2 != null) {
		curr.next = list2;
	}

	return dummy.next;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const four = new ListNode(4);
const two = new ListNode(2);
const one = new ListNode(1);
const three = new ListNode(3);

four.next = two;
two.next = one;
one.next = three;

let test1 = sortList(four);
let result = [];
while (test1 != null) {
	result.push(test1.val);
	test1 = test1.next;
}
console.log(result);


