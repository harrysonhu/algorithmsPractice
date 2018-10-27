const sortList = head => {

};

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

const test1 = sortList(four);
let result = [];
while (test1 != null) {
	result.push(test1.val);
	test1 = test1.next;
}
console.log(test1);


