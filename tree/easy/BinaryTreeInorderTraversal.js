const inorderTraversal = (root) => {
	const stack = [];
	const result = [];

	while (root !== null || stack.length > 0) {
		while (root !== null) {
			stack.push(root);
			root = root.left;
		}

		root = stack.pop();
		result.push(root.val);
		root = root.right;
	}

	return result;
};

///////////////////////////////////////////////////
var inorderTraversal2 = function(root) {
	let result = [];

	function traverse(node) {
		if (node) {
			traverse(node.left);
			result.push(node.val);
			traverse(node.right);
		}
	}

	traverse(root);

	return result;
};
