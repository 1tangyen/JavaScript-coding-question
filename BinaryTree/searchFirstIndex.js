function searchFirstIndex(nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) {
			// check if previous element is also target
			if (mid === 0 || nums[mid - 1] !== target) {
				return mid;
			} else {
				// continue searching towards left
				right = mid - 1;
			}
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return -1;
}
