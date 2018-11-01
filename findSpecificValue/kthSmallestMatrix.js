const kthSmallest = function(matrix, k) {
	if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
		return null;
	}
	let n = matrix.length;
	if (k == 1) {
		return matrix[0][0];
	}
	if (k == n * n) {
		return matrix[n - 1][n - 1];
	}
	let min = matrix[0][0];
	let max = matrix[n - 1][n - 1];
	while (min <= max) {
		let mid = min + Math.floor((max - min) / 2);
		let lessThanMid = count(matrix, mid);
		if (lessThanMid < k) {
			min = mid + 1;
		} else {
			max = mid - 1;
		}
	}
	return min;

}

const count = function(matrix, num) {
	let x = matrix.length - 1;
	let y = 0;
	let count = 0;
	while (x >= 0 && y < matrix.length) {
		if (matrix[x][y] > num) {
			x--;
		} else {
			y++;
			count += x + 1;
		}	
	}
	
	return count;
};

const test1 = kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8);
console.log(test1); // 13

const test2 = kthSmallest([[]], 3);
console.log(test2); // null

const test3 = kthSmallest([[1, 2, 4], [2, 3, 6], [8, 10, 11]], 4);
console.log(test3); // 3