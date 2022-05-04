const areValuesSorted = (values: Array<number | string>): boolean =>
  !values.some((value: number | string, i: number) => i ? values[i - 1] > value : false);

export default function binarySearchArray(arr: Array<number | string>, value: number | string): number {
  if (!areValuesSorted(arr)) {
    throw new Error("Array isn't sorted.");
  }

  let lower: number = 0;
  let upper: number = arr.length;

  while (lower < upper) {
    const newCenter: number = Math.floor((upper - lower) / 2) + lower;

    if (value < arr[newCenter]) {
      upper = newCenter; // update new upper bound
    } else if (value > arr[newCenter]) {
      lower = newCenter + 1; // update new lower bound (helps with out of bounds for some reason 🤔)
    } else {
      return newCenter; // found
    }
  }

  return -1;
}