export default function insertionSort(arr: Array<number | string>): void {
  for (let currentIndex = 1, runner = currentIndex; currentIndex < arr.length; currentIndex++) {
    const currentVal: number | string = arr[currentIndex];

    for (runner = currentIndex; runner > 0 && arr[runner - 1] > currentVal; runner--) {
      arr[runner] = arr[runner - 1]; // swap down values from current index to smallest value than currentVal
    }

    arr[runner] = currentVal; // set currentVal as smallest sorted part of array
    // ^ ex: [2, 2, 3, 4, 5] => [1, 2, 3, 4, 5] when currentVal = 1
  }
}