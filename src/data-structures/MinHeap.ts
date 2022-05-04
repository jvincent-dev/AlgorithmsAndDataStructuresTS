import swap from "../algorithms/Swap";

export default class MinHeap {
  private heap: Array<number>;

  constructor() {
    this.heap = [-1]; // placeholder
  }

  insert(value: number): void {
    this.heap.push(value);
    let index: number = this.heap.length - 1;

    while (index > 0) {
      const parentIndex: number = Math.floor(index / 2);

      if (this.heap[parentIndex] > this.heap[index]) {
        swap(this.heap, parentIndex, index);
      }

      index = parentIndex;
    }
  }

  remove(): number {
    if (this.isEmpty()) {
      throw new Error("Heap is empty.");
    }
    
    const removedValue: number = this.heap[1]; // replace root..
    
    this.heap[1] = this.heap[this.heap.length - 1]; // ...w last value
    this.heap.pop() // remove the last value this way b/c typescript is complaining
    
    let index: number = 1;
    
    // find which of the children are smallest > compare smaller child with current node > swap if smaller child is smaller than current node
    while (index < this.heap.length) {
      const leftChildIndex: number = index * 2;
      const rightChildIndex: number = (index * 2) + 1;
      const isLeftSmaller: boolean = this.heap[rightChildIndex] ? this.heap[leftChildIndex] < this.heap[rightChildIndex] : true;
      const isRightSmaller: boolean = this.heap[leftChildIndex] ? this.heap[rightChildIndex] < this.heap[leftChildIndex] : true;

      if (isLeftSmaller && this.heap[leftChildIndex] < this.heap[index]) {
        swap(this.heap, leftChildIndex, index);
        index = leftChildIndex;
      } else if (isRightSmaller && this.heap[rightChildIndex] < this.heap[index]) {
        swap(this.heap, rightChildIndex, index);
        index = rightChildIndex;
      } else { // both children are larger than current index
        break;
      }
    }

    return removedValue;
  }

  has(value: number): boolean {
    return this.heap.some(heapValue => heapValue === value);
  }

  size(): number {
    return this.heap.length - 1;
  }

  isEmpty(): boolean {
    return this.heap.length === 1;
  }

  print(): void {
    console.log(this.heap.slice(1));
  }
}