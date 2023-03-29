//BFE.DEV 50. search element right before target with Binary Search(possible duplicate array)
//Your are given a sorted ascending array of number, but might have duplicates, you are asked to return the element right before first appearance of a target number.
//If not found return undefined.
function binarySearchLastBefore(nums, target) {
  
  let left = 0;
  let right = nums.length - 1;
  let index = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      if (mid > 0 && nums[mid-1] !== target) {
        index = mid-1;
        break;
      } else {
        right = mid-1;
      }
    } else if (nums[mid] < target) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }

  if (index !== -1) {
    return nums[index];
  }

  return undefined;
}
