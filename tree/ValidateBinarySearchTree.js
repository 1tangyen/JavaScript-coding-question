var isValidBST = function(root) {
	return isValidBSTHelper(root, -Infinity, Infinity);
};

var isValidBSTHelper = function(node, minVal, maxVal) {
	if (!node) {
		return true;
	}

	if (node.val <= minVal || node.val >= maxVal) {
		return false;
	}

	return isValidBSTHelper(node.left, minVal, node.val) && isValidBSTHelper(node.right, node.val, maxVal);
};
