var generateTrees = function(n) {
	if (n === 0) {
		return [];
	}

	return generateTreesHelper(1, n);
};

var generateTreesHelper = function(start, end) {
	let result = [];

	if (start > end) {
		result.push(null);
		return result;
	}

	for (let i = start; i <= end; i++) {
		let leftSubtrees = generateTreesHelper(start, i - 1);
		let rightSubtrees = generateTreesHelper(i + 1, end);

		for (let j = 0; j < leftSubtrees.length; j++) {
			for (let k = 0; k < rightSubtrees.length; k++) {
				let root = new TreeNode(i);
				root.left = leftSubtrees[j];
				root.right = rightSubtrees[k];
				result.push(root);
			}
		}
	}

	return result;
};
