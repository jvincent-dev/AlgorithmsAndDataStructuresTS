export default function countingSort(arr: Array<number>): void {
  if (arr.length <= 1) {
    return;
  }

  const maxValue = arr.reduce((max: number, value: number) => Math.max(max, value), arr[0]); // find max value
  const countingArray = new Array(maxValue + 1).fill(0); // create array with size max value + 1 and init w 0s

  arr.forEach(value => countingArray[value]++); // count number of times values appear

  // initialize pointer to track current arr index
  let currentArrIndex = 0;

  countingArray.forEach((count: number, index: number) => { // loop through countingArray
    for (let i = 0; i < count; i++) { // replace values on arr using currentArrIndex
      arr[currentArrIndex] = index;
      currentArrIndex++;
    }
  });
}