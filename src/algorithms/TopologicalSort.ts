import Graph, { GraphNode } from "../data-structures/Graph";
import Stack from "../data-structures/Stack";

function helper(graphNode: GraphNode<string | number>, stack: Stack<string | number> = new Stack()): void {
  // is visited
  if (stack.has(graphNode.label)) {
    return;
  }

  graphNode.children.forEach(child => {
    // recursively call helper to child
    helper(child, stack);
  });

  // since all children are visited, mark node as visited
  stack.push(graphNode.label);
}

export default function topologicalSort(graph: Graph<string | number>): void {
  const result: Stack<string | number> = new Stack();

  // go through graph nodes
  graph.nodes.forEach(graphNode => {
    helper(graphNode, result);
  });

  console.log("RESULT IS REVERSED");

  // print result
  result.print();
}
// plan: init stack to track visited nodes > go through graph nodes > recursively call topologicalSort on children nodes until there are no more > add 
// visited node to stack

// tests ---
// const zero = new GraphNode(0);
// g.add(zero);
// const one = new GraphNode(1);
// g.add(one);
// const two = new GraphNode(2);
// const three = new GraphNode(3);
// g.addEdge(two, three);
// g.addEdge(three, one);
// const four = new GraphNode(4);
// const five = new GraphNode(5);
// g.addEdge(four, zero);
// g.addEdge(four, one);
// g.addEdge(five, zero);
// g.addEdge(five, two);
/** [ 0, 1, 3, 2, 4, 5 ].reverse() or [ 0, 1, 3, 2, 5, 4 ].reverse() or [ 0, 1, 4, 3, 2, 5 ].reverse(), etc..
 * 0 ->
 * 1 ->
 * 2 -> 3
 * 3 -> 1
 * 4 -> 0, 1
 * 5 -> 0, 2
 */
//  const one = new GraphNode(1);
//  const two = new GraphNode(2);
//  const three = new GraphNode(3);
//  const four = new GraphNode(4);
//  g.addEdge(one, two);
//  g.add(three);
//  g.addEdge(one, four);
//  g.addEdge(two, three);
//  g.addEdge(two, four);
//  const five = new GraphNode(5);
//  g.addEdge(four, three);
//  g.addEdge(four, five);
/** [ 3, 5, 4, 2, 1 ].reverse() or [ 5, 3, 4, 2, 1 ].reverse()
 * 1 -> 2, 4
 * 2 -> 3, 4
 * 3 ->
 * 4 -> 3, 5
 * 5 ->
 */
// const a = new GraphNode("A");
// const b = new GraphNode("B");
// const c = new GraphNode("C");
// const d = new GraphNode("D");
// g.addEdge(a, b);
// g.addEdge(a, d);
// g.addEdge(c, b);
// g.addEdge(c, d);
// g.addEdge(d, b);
/** [ 'B', 'D', 'A', 'C' ].reverse() or [ 'B', 'D', 'C', 'A' ].reverse()
 * A -> B, D
 * B ->
 * C -> B, D
 * D -> B
 */