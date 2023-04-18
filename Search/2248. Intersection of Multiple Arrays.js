var intersection = function(arrays) {
	let n = arrays.length;
	let result = [];

	if (n == 0) {
		return result;
	}

	let map = new Map();

	for (let i = 0; i < arrays[0].length; i++) {
		let count = 0;
		for (let j = 1; j < n; j++) {
			if (arrays[j].includes(arrays[0][i])) {
				count++;
			}
		}

		if (count == n - 1 && !map.has(arrays[0][i])) {
			result.push(arrays[0][i]);
			map.set(arrays[0][i], true);
		}
	}

	return result;
};
