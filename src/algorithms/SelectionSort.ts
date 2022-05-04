import swap from "./Swap";

export default function selectionSort(arr: Array<number | string>): void {
  if (arr.length <= 1) {
    return;
  }
  let minValIndex: number;

  for (let currentIndex: number = 0; currentIndex < arr.length; currentIndex++) {
    minValIndex = currentIndex;

    for (let runner: number = currentIndex + 1; runner < arr.length; runner++) {
      if (arr[minValIndex] > arr[runner]) { // check if current min value index > following values
        minValIndex = runner;
      }
    }

    swap(arr, minValIndex, currentIndex); // then swap minIndex with current index values
  }
}