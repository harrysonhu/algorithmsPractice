// BFS
// Time: O(VE)
// Space: O(V + E), The edge list has an entry in the array for each node (V) and each entry has an array of size E
const isGraphValidTree = (n, edges) => {
    if (edges.length === 0) {
        return n === 1;
    }

    const edgeList = new Array(n).fill(null).map(() => []);
    for (let [u, v] of edges) { // O(E), must visit every edge to build the edge list
        edgeList[u].push(v);
        edgeList[v].push(u);
    }

    const seen = new Set();
    const queue = [];

    seen.add(0);
    queue.push(0);

    while (queue.length > 0) { // O(V), in the worst case to visit every node
        const curr = queue.shift();

        for (let neighbor of edgeList[curr]) { // In the worst case, each node has a lot of edges and algorithm has to check each neighbor. Also, queue.includes is linear runtime,
                                               // so O(V + VE)
            if (queue.includes(neighbor)) {
                return false;
            }
            if (!seen.has(neighbor)) {
                queue.push(neighbor);
                seen.add(neighbor);
            }
        }
    }

    return seen.size === n;
}

// DFS
// Time: O(V + E)
// Memory: O(V + E)
const isGraphValidTree = (n, edges) => {
    if (edges.length === 0) {
        return n === 1;
    }

    const edgeList = new Array(n).fill(null).map(() => []); // O(E) time to build the edge list from edges provided
    for (let [u, v] of edges) {
        edgeList[u].push(v);
        edgeList[v].push(u);
    }
    const seen = new Set();
    
    function dfs(curr, parent) {
        if (seen.has(curr)) {
            return false;
        }
        seen.add(curr);
        for (let neighbor of edgeList[curr]) { // O(E) in the worst case to visit every neighbor from every node. This grows as the number of edges grows
            if (neighbor !== parent && !dfs(neighbor, curr)) {
                return false;
            }
        }
        seen.delete(curr);

        return true;
    }

    for (let i = 0; i < n; i++) { // O(V), must visit every node and dfs from each node to ensure no cycle
        if (!dfs(i, null)) {
            return false;
        }
    }

    return true;
}