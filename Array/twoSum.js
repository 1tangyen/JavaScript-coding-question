function twoSum(nums, target) {
	const complements = new Map();

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (complements.has(complement)) {
			return [ complements.get(complement), i ];
		}
		complements.set(nums[i], i);
	}

	return null; // No solution found
}

function twoSun(nums, target) {
	const complements = new Map();

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (complements.has(complement)) {
			return [ complements.get(complement), i ];
		}
		complements.set(nums[i], i);
	}
	return null;
}
