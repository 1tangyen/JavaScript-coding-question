var sumNumbers = function(root) {
	if (!root) {
		return 0;
	}

	let sum = 0;

	function traverse(node, pathSum) {
		if (!node.left && !node.right) {
			sum += pathSum * 10 + node.val;
			return;
		}

		if (node.left) {
			traverse(node.left, pathSum * 10 + node.val);
		}

		if (node.right) {
			traverse(node.right, pathSum * 10 + node.val);
		}
	}

	traverse(root, 0);

	return sum;
};
