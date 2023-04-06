var kthSmallest = function(root, k) {
	let count = 0;
	let result = null;

	function traverse(node) {
		if (!node) {
			return;
		}

		traverse(node.left);
		count++;

		if (count === k) {
			result = node.val;
			return;
		}

		traverse(node.right);
	}

	traverse(root);
	return result;
};
