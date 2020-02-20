const countConnected = (n, graph) => {
	if (graph === null || graph.length === 0) {
  	return 0;
  }
  
  const adjList = new Array(n).fill(null).map(() => []);
  const seen = new Set();
  let count = 0;
  
  for (let [u, v] of graph) {
  	adjList[u].push(v);
    adjList[v].push(u);
  }
  
  for (let i = 0; i < n; i++) {
  	if (!seen.has(i)) {
    	count++;
      dfs(i);
    }
  }
  
  function dfs(node) {
  	if (seen.has(node)) {
    	return;
    }
    seen.add(node);
    for (let neighbor of adjList[node]) {
    	dfs(neighbor);
    }
  }
  
  return count;
  
}

const testA = [[1,5], [0, 2], [2, 4]]; // 3
const testB = [[0, 1], [1, 2], [3, 4]]; // 2
console.log(countConnected(6, testA));
console.log(countConnected(5, testB));