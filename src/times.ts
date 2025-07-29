export function times<T>(
  count: number,
  callbackFn: (index: number) => T,
) {
  return Array(Math.round(count))
    .fill({})
    .map((_, index) => callbackFn(index));
}
