function sortColors(nums) {
	let left = 0;
	let right = nums.length - 1;
	let i = 0;

	while (i <= right) {
		if (nums[i] === 0) {
			// Swap with left pointer
			[ nums[i], nums[left] ] = [ nums[left], nums[i] ];
			left++;
			i++;
		} else if (nums[i] === 2) {
			// Swap with right pointer
			[ nums[i], nums[right] ] = [ nums[right], nums[i] ];
			right--;
		} else {
			// nums[i] === 1, move to next element
			i++;
		}
	}
}
