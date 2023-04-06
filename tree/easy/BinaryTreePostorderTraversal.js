var postorderTraversal = function(root) {
	let result = [];

	function traverse(node) {
		if (node) {
			traverse(node.left);
			traverse(node.right);
			result.push(node.val);
		}
	}
	traverse(root);
	return result;
};
