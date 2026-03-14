export default function appendToEachArrayValue(array, appendString) {
  const arrayn = [];
  for (const value of array) {
    arrayn.push(appendString + value);
  }

  return arrayn;
}
