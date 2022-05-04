export default function swap(arr: Array<number | string>, indexA: number, indexB: number): void {
  const temp = arr[indexA];

  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}