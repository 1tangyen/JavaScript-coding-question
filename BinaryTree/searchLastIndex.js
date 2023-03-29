//BFE.DEV 49. search last index with Binary Search(possible duplicate array)
// Your are given a sorted ascending array of number, but might have duplicates, you are asked to return the last index of a target number.
// If not found return -1.

function lastIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}
