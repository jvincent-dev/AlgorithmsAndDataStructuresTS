export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number = 0) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  private length: number;
  head: ListNode;

  constructor() {
    this.length = 0;
    this.head = new ListNode();
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }

  has(value: number): boolean {
    let currentNode: ListNode | null = this.head.next;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  add(value: number): void {
    const newNode: ListNode = new ListNode(value);
    let currentNode: ListNode | null = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    this.length++;
  }

  remove(removeNode: ListNode | null): number {
    if (this.isEmpty()) {
      throw new Error("LinkedList is empty.");
    }

    let currentNode: ListNode | null = this.head;

    while (currentNode.next) {
      if (currentNode.next === removeNode) {
        break;
      }

      currentNode = currentNode.next;
    }

    if (!currentNode.next) {
      throw new Error("ListNode not found.");
    }

    const removedValue: number = currentNode.next.value;

    currentNode.next = currentNode.next.next;
    this.length--;

    return removedValue;
  }

  print(): void {
    const values: Array<string> = ["["];
    let currentNode: ListNode | null = this.head.next;

    while (currentNode) {
      values.push(currentNode.value.toString());
      currentNode = currentNode.next;
    }

    values.push("]");

    console.log(values.join(" "));
  }
}