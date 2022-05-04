function merge(arr: Array<number | string>, start: number, midpoint: number, end: number): void {
  const tempArr: Array<number | string> = [];
  let leftRunner: number = start;
  let rightRunner: number = midpoint + 1;
  
  // go through subarr starting from start
  // compare start (left) values with midpoint + 1 (right) values
  // push smaller value from arr into new array until no more values (sorts subarr into tempArr)
  while (leftRunner <= midpoint && rightRunner <= end) {
    if (arr[leftRunner] <= arr[rightRunner]) {
      tempArr.push(arr[leftRunner]);
      leftRunner++;
    } else {
      tempArr.push(arr[rightRunner]);
      rightRunner++;
    }
  }

  const lastLeftIndex: number = leftRunner + (midpoint - leftRunner);
  const lastRightIndex: number = rightRunner + (end - rightRunner);

  // push remaining values
  tempArr.push(...arr.slice(rightRunner, lastRightIndex + 1));
  tempArr.push(...arr.slice(leftRunner, lastLeftIndex + 1));

  // update subarr from start to end
  arr.splice(start, tempArr.length, ...tempArr);
}

export default function mergeSort(arr: Array<number | string>, start: number = 0, end: number = arr.length - 1): void {
  if (start >= end) {
    return;
  }
  
  const midpoint: number = start + Math.floor((end - start) / 2); // can also be Math.floor(start + end / 2)
  mergeSort(arr, start, midpoint);
  mergeSort(arr, midpoint + 1, end);
  merge(arr, start, midpoint, end);
}

/** Plan
 * take in arr > find midpoint > call merge sort on left and right halves > merge them back
 */