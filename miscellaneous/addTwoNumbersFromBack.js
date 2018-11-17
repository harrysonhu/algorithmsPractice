function ListNode(val) {
	this.val = val;
	this.next = null;
}

const addTwoNumbers = (l1, l2) => {
	const list1 = [];
	const list2 = [];
	while (l1 !== null) {
		list1.push(l1.val);
		l1 = l1.next;
	}
	while (l2 !== null) {
		list2.push(l2.val);
		l2 = l2.next;
	}
	let sum = 0;
	let list = new ListNode(0);
	while (list1.length > 0 || list2.length > 0) {
		if (list1.length > 0) {
			sum += list1.pop();
		}
		if (list2.length > 0) {
			sum += list2.pop();
		}
		list.val = sum % 10;
		sum = Math.floor(sum / 10);
		let head = new ListNode(sum);
		head.next = list;
		list = head;
	}
	return list.val === 0 ? list.next : list;
}
