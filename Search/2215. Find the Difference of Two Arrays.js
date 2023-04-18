var findDifference = function(nums1, nums2) {
	let set1 = new Set(nums1);
	let set2 = new Set(nums2);

	let diff1 = [];
	let diff2 = [];

	for (let num of set1) {
		if (!set2.has(num)) {
			diff1.push(num);
		}
	}

	for (let num of set2) {
		if (!set1.has(num)) {
			diff2.push(num);
		}
	}

	return [ diff1, diff2 ];
};
