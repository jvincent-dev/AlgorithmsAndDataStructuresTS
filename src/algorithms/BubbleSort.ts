import swap from "./Swap";

export default function bubbleSort(arr: Array<number | string> = []): void {
  if (arr.length <= 1) {
    return;
  }

  for (let currentIndex: number = 0; currentIndex < arr.length; currentIndex++) { // for each current number before the last index ...
    for (let runner: number = currentIndex + 1; runner < arr.length; runner++) { // ... bubble up for each number after the current number ...
      if (arr[currentIndex] > arr[runner]) { // ... if current number > next runner number.
        swap(arr, currentIndex, runner);
      }
    }
  }
}
