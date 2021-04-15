/* eslint no-restricted-syntax: 0 */

export default function hasSameStuff(array1, array2) {
  if (array1.length !== array2.length) return false
  for (const element of array1) {
    if (!array2.includes(element)) return false
  }
  for (const element of array2) {
    if (!array1.includes(element)) return false
  }
  return true
}
