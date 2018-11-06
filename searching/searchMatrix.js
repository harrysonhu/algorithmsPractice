const searchMatrix = (matrix, target) => {
	if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
		return false;
	}
	let row = 0;
	let col = matrix[0].length - 1;
	while (row < matrix.length && col > -1) {
		if (matrix[row][col] == target) {
			return true;
		} else if (matrix[row][col] < target) {
			row++;
		} else {
			col--;
		}
	}
	return false;
};

const matrix = [[1, 3, 5, 7], 
				[10, 11, 16, 20], 
				[23, 30, 34, 50]]

const test1 = searchMatrix(matrix, 11);
console.log(test1); // true;

const test2 = searchMatrix(null, 10);
console.log(test2); // false

const test3 = searchMatrix(matrix, 55);
console.log(test3); // false