const wallsAndGates = rooms => {
	if (rooms == null || rooms.length == 0 || rooms[0].length == 0) {
		return rooms;
	}	
	for (let i = 0; i < rooms.length; i++) {
		for (let j = 0; j < rooms[i].length; j++) {
			if (rooms[i][j] == 0) {
				dfsHelper(rooms, i, j, 0);
			}
		}
	}
	return rooms;
};

const dfsHelper = (rooms, i, j , value) => {
	if (i < 0 || j < 0 || i > rooms.length - 1 || j > rooms.length - 1 || rooms[i][j] < value) {
		return;
	}
	rooms[i][j] = value;
	dfsHelper(rooms, i + 1, j, value + 1);
	dfsHelper(rooms, i - 1, j, value + 1);
	dfsHelper(rooms, i, j + 1, value + 1);
	dfsHelper(rooms, i, j - 1, value + 1);
};

// 999 represents an empty room, -1 represents a wall, and 0 represents a gate
// We need to fill each empty room with the distance to its nearest gate
const rooms = [[999, -1, 0, 999],
			   [999, 999, 999, -1],
			   [999, -1, 999, -1],
			   [0, -1, 999, 999]];

const expected = [[3, -1, 0, 1],
			      [2, 2, 1, -1],
			      [1, -1, 2, -1],
			      [0, -1, 3, 4]];

const test1 = wallsAndGates(rooms);
console.log(test1);			  