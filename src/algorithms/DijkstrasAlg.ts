import Graph, { GraphNode } from "../data-structures/Graph";

const INF = Number.MAX_SAFE_INTEGER;

function dequeueMin(queue: Array<GraphNode<string>>, calculatedPaths: Map<string, number>): GraphNode<string> {
  const result: GraphNode<string> = queue.reduce((prev: GraphNode<string>, curr: GraphNode<string>, index: number) => {
    if (index === 0) {
      return prev;
    }

    const prevPath = calculatedPaths.get(prev.label);
    const currPath = calculatedPaths.get(curr.label);

    if (!prevPath) {
      return curr;
    } else if (!currPath) {
      return prev;
    } else if (currPath < prevPath) {
      return curr;
    }

    return prev;
  }, queue[0]); // get min node
  const nodeIndex: number = queue.findIndex(curr => curr === result); // get min node index

  queue.splice(nodeIndex, 1); // delete

  return result;
}

export default function singleShortestPathDijkstras(graph: Graph<string>, start: GraphNode<string>) {
  const calculatedPaths: Map<string, number> = new Map(); // O(v)
  const visitedNodes: Set<GraphNode<string>> = new Set(); // O(v)
  const queue = []; // TODO: implement a priority queue that handles key value pairs or node values

  queue.push(start); // O(???)

  // init calculated paths
  graph.nodes.forEach(node => {
    node.weights.forEach((weight) => {
      if (weight && weight < 0) {
        throw new Error("Invlaid Graph Weight: has negative number" + weight);
      }
    });

    if (node === start) {
      calculatedPaths.set(node.label, 0);
    } else {
      calculatedPaths.set(node.label, INF);
    }
  });

  while (queue.length) {
    // get smallest from paths
    const node: GraphNode<string> = dequeueMin(queue, calculatedPaths);

    if (!visitedNodes.has(node)) {
      node.children.forEach(child => {
        queue.push(child);

        // update calculatedPaths of child
        const currentWeight = calculatedPaths.get(child.label); // calculated weight
        const parentToChildWeight = node.weights.get(child.label);
        const currentParentWeight = calculatedPaths.get(node.label); // weight so far
        const newWeight = Math.min(
          (typeof parentToChildWeight === "number" ? parentToChildWeight : INF) + (typeof currentParentWeight === "number" ? currentParentWeight : INF),
          (typeof currentWeight === "number" ? currentWeight : INF)
        ); // typeof check handles "undefined" syntax errors and 0s. calculated values and node weights should exist, unless calculatedPath is INF

        calculatedPaths.set(child.label, newWeight);
      });
    }

    visitedNodes.add(node);
  }

  return calculatedPaths;
}

/**
 * plan
 * - init map table, visited set, queue > take min node form queue > if not visited: add it's children to queue > update map if 
 *   new parent to child weight calculation is smaller than what's alreayd in the map > mark current node as visited > repeat until queue is empty
 * edge cases
 * - path doesn't exist/unreachable nodes (will always be INF), cannot have negative numbers, empty graph, single node, cannot be undirected
 * time: ???, space: best case O(v) if queue doesn't take duplicates
 */

//  // add nodes
//  const a: GraphNode<string> = new GraphNode("a");
//  const b: GraphNode<string> = new GraphNode("b");
//  const c: GraphNode<string> = new GraphNode("c");
//  const d: GraphNode<string> = new GraphNode("d");
//  const e: GraphNode<string> = new GraphNode("e");
//  const graph: Graph<string> = new Graph();

//  // set weights
//  graph.addEdge(a, b, 4);
//  graph.addEdge(a, c, 2);
//  graph.addEdge(b, c, 3);
//  graph.addEdge(b, d, 2);
//  graph.addEdge(b, e, 3);
//  graph.addEdge(c, b, 1);
//  graph.addEdge(c, d, 4);
//  graph.addEdge(c, e, 5);
//  graph.addEdge(e, d, 1);
 
//  const result = singleShortestPathDijkstras(graph, a);

//  console.log(result);