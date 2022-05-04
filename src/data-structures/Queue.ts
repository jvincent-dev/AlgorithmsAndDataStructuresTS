import { ListNode } from "./LinkedList";

export default class Queue {
  head: ListNode;
  tail: ListNode;
  private length: number;

  constructor() {
    this.head = new ListNode();
    this.tail = this.head;
    this.length = 0;
  }

  enqueue(value: number): void {
    const newNode: ListNode = new ListNode(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  dequeue(): ListNode | null {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode: ListNode | null = this.head.next;

    this.head.next = this.head.next?.next || null;
    this.length--;

    if (removedNode && removedNode.next) {
      removedNode.next = null;
    }

    return removedNode;
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

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
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