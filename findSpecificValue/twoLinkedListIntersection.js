const getIntersectionNode = (headA, headB) => {
	let lengthA = getLength(headA);
	let lengthB = getLength(headB);
	while (lengthA > lengthB) {
		headA = headA.next;
		lengthA--;
	}

	while (lengthB > lengthA) {
		headB = headB.next;
		lengthB--;
	}

	while (headA != headB) {
		headA = headA.next;
		headB = headB.next;
	}
	return headA;
};

const getLength = head => {
	let result = 0;
	while (head != null) {
		result++;
		head = head.next;
	}
	return result;
};