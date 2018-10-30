const exist = (board, word) => {
	if (board == null || board.length == 0 || board[0].length == 0) {
		return false;
	}
	let chars = word.split('');
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (wordExists(board, chars, i, j, 0)) {
				return true;
			}
		}
	}
	return false;
};

const wordExists = (board, chars, i, j, depth) => {
	if (depth == chars.length) {
		return true;
	}
	if (i < 0 || j < 0 || i == board.length || j == board[0].length) {
		return false;
	}
	if (board[i][j] != chars[depth] || board[i][j] == 0) {
		return false;
	}
	let temp = board[i][j];
	board[i][j] = 0;
	let result = (wordExists(board, chars, i + 1, j, depth + 1) || 
				  wordExists(board, chars, i - 1, j, depth + 1) ||
				  wordExists(board, chars, i, j + 1, depth + 1) ||
				  wordExists(board, chars, i, j - 1, depth + 1));
	board[i][j] = temp;
	return result;
};

const testBoard = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

const test1 = exist(testBoard, "ABCCED");
console.log(test1); // true

const test2 = exist(testBoard, "SEE");
console.log(test2); // true

const test3 = exist(testBoard, "ADFZ");
console.log(test3); // false

