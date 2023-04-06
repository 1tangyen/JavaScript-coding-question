function removeElement(nums, val) {
	let index = 0;
	nums.forEach((num) => {
		if (num !== val) {
			nums[index] = num;
			index++;
		}
	});
	return index;
}

function removeElement(nums, val) {
	let index = 0;
	nums.forEach((num) => {
		if (num !== val) {
			nums[index] = num;
			index++;
		}
	});
	return index;
}
