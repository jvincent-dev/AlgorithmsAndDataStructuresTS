import swap from "./Swap";

function getPartition(arr: Array<number | string>, start: number = 0, end: number = arr.length - 1): number {
  let pivot: number | string = arr[end];
  let sortedPivotPosition: number = start - 1; // initialize pivot's position

  for (let runner = start; runner < end; runner++) {
    if (arr[runner] < pivot) {
      sortedPivotPosition++;
      swap(arr, sortedPivotPosition, runner);
    }
  } // find correct pivot's position

  sortedPivotPosition++ // correct position is after the last value < pivot
  swap(arr, sortedPivotPosition, end); // place pivot in correct sorted position

  return sortedPivotPosition; // this means everything before pivot is less than pivot
}

export default function quickSort(arr: Array<number | string>, start: number = 0, end: number = arr.length - 1): void {
  if (start >= end) {
    return;
  }

  const partition = getPartition(arr, start, end);

  quickSort(arr, start, partition - 1);
  quickSort(arr, partition + 1, end);
}
