export Stack {
	constructor() {
		this.stack = [];
		this.count = 0;
	}

	const push = x => {
		this.stack.push(x);
		this.count++;
	}

	const pop = () => {
		if (this.stack.length == 0) {
			return null;
		}
		this.count--;
		let result = this.stack[this.count];
		delete this.stack[this.count];
		return result;
	}

	const peek = () => {
		return this.stack[this.count - 1];
	}

	const size = () => {
		return this.stack.length;
	}
}

const stack = new Stack();
