export default class Stack<T> {
  private stack: Array<T>;

  constructor() {
    this.stack = [];
  }

  push(value: T): void {
    this.stack.push(value);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Stack is empty.");
    }

    return this.stack.pop();
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is empty.");
    }

    return this.stack[this.stack.length - 1];
  }

  has(value: T): boolean {
    return this.stack.some(stackValue => stackValue === value);
  }

  size(): number {
    return this.stack.length;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  print(): void {
    console.log(this.stack);
  }
}