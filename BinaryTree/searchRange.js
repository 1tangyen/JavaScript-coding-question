//34. Find First and Last Position of Element in Sorted Array
//Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
//If target is not found in the array, return [-1, -1].
//You must write an algorithm with O(log n) runtime complexity.

function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  // Search for the leftmost occurrence of target
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    }
    else if (nums[mid] > target) {
      right = mid - 1;
    }
    else {
      // nums[mid] === target, move left pointer to left half
      right = mid - 1;
    }
  }
  
  if (left >= nums.length || nums[left] !== target) {
    // Target not found in array
    return [-1, -1];
  }
  
  const firstOccurrence = left;
  left = 0;
  right = nums.length - 1;
  
  // Search for the rightmost occurrence of target
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    }
    else if (nums[mid] > target) {
      right = mid - 1;
    }
    else {
      // nums[mid] === target, move right pointer to right half
      left = mid + 1;
    }
  }
  
  const lastOccurrence = right;
  return [firstOccurrence, lastOccurrence];
}
