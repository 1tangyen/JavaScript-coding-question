function findKthLargest(nums, k) {
	nums.sort((a, b) => b - a); // Sort the array in descending order
	return nums[k - 1]; // Return the Kth element (0-indexed)
}
