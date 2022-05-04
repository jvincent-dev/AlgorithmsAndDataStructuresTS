export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isLeaf(): boolean {
    return this.left === this.right && this.left === null;
  }
}

export default class BST {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number, currentRoot: TreeNode | null = this.root): TreeNode {
    if (this.find(value) !== null) {
      throw new Error("Input already exists.");
    }

    const newNode: TreeNode = new TreeNode(value);

    if (!currentRoot) {
      this.root = newNode;
    } else if (value <= currentRoot.value) { // will check left
      if (currentRoot.left) {
        this.insert(value, currentRoot.left);
      } else {
        currentRoot.left = newNode;
      }
    } else if (value > currentRoot.value) { // will check right
      if (currentRoot.right) {
        this.insert(value, currentRoot.right);
      } else {
        currentRoot.right = newNode;
      }
    }

    return newNode;
  }

  private getLeftSuccessorNode(currentRoot: TreeNode): TreeNode {
    if (currentRoot.right) {
      return this.getLeftSuccessorNode(currentRoot.right);
    }

    return currentRoot;
  }

  private removeNode(input: number, currentRoot: TreeNode | null): TreeNode | null {
    if (!currentRoot) {
      return null;
    } else if (input < currentRoot.value) { // search left subtree
      currentRoot.left = this.removeNode(input, currentRoot.left);
    } else if (input > currentRoot.value) { // search right subtree
      currentRoot.right = this.removeNode(input, currentRoot.right);
    } else { // node found
      if (currentRoot.isLeaf()) { // has no children
        return null;
      } else if (currentRoot.left === null) { // has only right child
        return currentRoot.right;
      } else if (currentRoot.right === null) { // has only left child
        return currentRoot.left;
      }

      // if has both children
      // get a successor from left subtree
      // replace deleted node's value with successor's value
      currentRoot.value = this.getLeftSuccessorNode(currentRoot.left).value;

      // delete successor duplicate under left subtree and return to be set in parent
      currentRoot.left = this.removeNode(currentRoot.value, currentRoot.left);
    }

    return currentRoot;
  }

  remove(input: number): void {
    this.root = this.removeNode(input, this.root);
  }

  find(input: number, currentRoot: TreeNode | null = this.root): TreeNode | null {
    if (currentRoot === null) {
      return null;
    }

    if (input < currentRoot.value) {
      return this.find(input, currentRoot.left);
    } else if (input > currentRoot.value) {
      return this.find(input, currentRoot.right);
    } else if (input === currentRoot.value) {
      return currentRoot;
    }

    return null;
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  print(): void {
    console.log(this.root);
  }
}

/** inserted in this order: [16, 23, 19, 64, 9, 10]
 *      16        16          16          16                 16                16
 *                  \        / \         /  \               /  \              /   \
 *                   23         23           23            9   23            9     23
 *                             /             / \              /  \            \   /  \
 *                            19           19   64           19   64          10 19   64
 */