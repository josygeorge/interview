//To represent this graph in JavaScript, we can use an adjacency list:
const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
};
console.log("Graph with it's nodes: ", graph);
// tree representation
/* 
A -- B -- C
|    |
D -- E -- F 
*/
// BFS should give: A->B->D->C->E->F
// DFS should give: A->D->E->F->B->C

//BFS using a queue to traverse the graph
function bfs(graph, start) {
    const queue = [start];
    const visited = new Set();
    const result = [];

    while (queue.length) {
        const vertex = queue.shift();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);

            for (const neighbor of graph[vertex]) {
                queue.push(neighbor);
            }
        }
    }

    return result;
}
console.log("Breadth First");
console.log(bfs(graph, 'A'));

//DFS using a stack for the given graph
function dfs(graph, start) {
    const stack = [start];
    const visited = new Set();
    const result = [];

    while (stack.length) {
        const vertex = stack.pop();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);

            for (const neighbor of graph[vertex]) {
                stack.push(neighbor);
            }
        }
    }

    return result;
}

console.log("Depth First");
console.log(dfs(graph, 'A'));