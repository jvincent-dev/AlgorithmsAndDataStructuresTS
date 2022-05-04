const TEST_NUMS: Array<number> = new Array(10).fill(0).map((_, index) => index + 1);
const TEST_STRS: Array<string> = ["apple", "banana", "cherry", "don", "elephant", "fig", "grape", "halo", "internet", "john", "kos"];

function isSorted(arr: Array<number | string>): boolean {
  return !arr.some((value: number | string, index: number) => index ? arr[index - 1] > value : false);
}

function main(): void {
  // TODO: no tests yet, but feel free to import algorithms or data structures and run them here
}

main();
