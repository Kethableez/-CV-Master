export function max(arr: number[]) {
  const temp = arr;
  temp.sort((a, b) => a - b);
  return temp[temp.length - 1];
}
