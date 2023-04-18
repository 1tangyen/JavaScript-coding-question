var intersect = function(nums1, nums2) {
	let map1 = new Map();
	let map2 = new Map();
	let intersection = [];

	// Count frequency of elements in nums1
	for (let num of nums1) {
		map1.set(num, (map1.get(num) || 0) + 1);
	}

	// Count frequency of elements in nums2 and find intersection
	for (let num of nums2) {
		if (map1.has(num) && map1.get(num) > 0) {
			intersection.push(num);
			map1.set(num, map1.get(num) - 1);
		}
	}

	return intersection;
};

var intersect = function(nums1, nums2) {
	let freq = new Map();
	let intersection = [];

	for (let num of nums1) {
		freq[num] = (freq[num] || 0) + 1;
	}

	for (let num of nums2) {
		if (freq[num]) {
			intersection.push(num);
			freq[num]--;
		}
	}
	return intersection;
};
