// 112. Path Sum
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

var hasPathSum = function(root, targetSum) {
	if (!root) {
		return false;
	}

	function traverse(node, currentSum) {
		if (!node.left && !node.right) {
			return currentSum + node.val === targetSum;
		}

		let left = false;
		let right = false;

		if (node.left) {
			left = traverse(node.left, currentSum + node.val);
		}

		if (node.right) {
			right = traverse(node.right, currentSum + node.val);
		}

		return left || right;
	}

	return traverse(root, 0);
};
