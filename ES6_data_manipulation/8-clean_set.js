export default function cleanSet(set, startString) {
  const result = [...set]
    .filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length))
    .join('-');

  return result;
}
