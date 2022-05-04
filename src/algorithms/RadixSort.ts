import LinkedList, { ListNode } from "../data-structures/LinkedList";

class Radix {
  private radix: Array<LinkedList>;
  maxDigitLength: number;
  currentPlace: number;

  constructor(maxDigitLength: number) {
    this.radix = this.createNewRadix();
    this.maxDigitLength = maxDigitLength;
    this.currentPlace = 0;
  }

  private createNewRadix(): Array<LinkedList> {
    return new Array(10).fill(0).map(() => new LinkedList());
  }

  getCurrentDigit(number: number): number {
    return Math.floor(number / Math.pow(10, this.currentPlace)) % 10;
  }

  setInitialValues(nums: Array<number>): void {
    nums.forEach((num: number) => {
      const currentDigit: number = this.getCurrentDigit(num);

      this.radix[currentDigit].add(num);
    });

    this.currentPlace++;
  }

  print() {
    this.radix.forEach((list: LinkedList, index: number) => {
      console.log(index);
      list.print();
    });
  }

  sort(nums: Array<number>): void {
    this.setInitialValues(nums);

    while (this.currentPlace < this.maxDigitLength) {
      const oldRadix: Array<LinkedList> = this.radix;
      this.radix = this.createNewRadix();

      oldRadix.forEach((list: LinkedList) => {
        let currentNode: ListNode | null = list.head.next;

        while (currentNode) {
          const currentDigit: number = this.getCurrentDigit(currentNode.value);

          this.radix[currentDigit].add(currentNode.value);
          currentNode = currentNode.next;
        }
      });

      this.currentPlace++;
    }

    let numsIndex: number = 0;

    this.radix.forEach(list => {
      let currentNode: ListNode | null = list.head.next;

      while (currentNode) {
        nums[numsIndex] = currentNode.value;
        numsIndex++;
        currentNode = currentNode.next;
      }
    });
  }
}

export default function radixSort(nums: Array<number>): void {
  if (nums.length <= 1) {
    return;
  }

  let maxValue: number = nums.reduce((max, value) => Math.max(max, value), nums[0]);
  let radixIterations: number = 0;

  while (maxValue > 0) {
    radixIterations++;
    maxValue = Math.floor(maxValue / 10);
  }

  const radix: Radix = new Radix(radixIterations);

  radix.sort(nums);
}

/** Plan
 * sample test case: [170, 45, 75, 90, 802, 24, 2, 66]
 * need: array and linked lists
 * initialize array from 0 - 9 with empty linked lists
 * find largest digit and initialize a counter to track how many times we've done radix sort
 * for each number get least significant digit > use digit to add to it's index's linked list > repeat d times where d is the length of the largest digit
 * loop through radix sort result and update input nums array
 */
