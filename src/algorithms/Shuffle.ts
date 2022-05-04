export default function shuffleArray(arr: Array<number | string>): void {
  for (let i: number = 0; i < arr.length; i++) {
    const randIdx: number = Math.floor(Math.random() * (arr.length - i)) + i;
    const temp: number | string = arr[randIdx];

    arr[randIdx] = arr[i];
    arr[i] = temp;
  }
}