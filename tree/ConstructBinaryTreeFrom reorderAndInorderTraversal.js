var buildTree = function(preorder, inorder) {
	if (preorder.length === 0 || inorder.length === 0) {
		return null;
	}

	let rootVal = preorder[0];
	let root = new TreeNode(rootVal);
	let rootIndex = inorder.indexOf(rootVal);

	let leftInorder = inorder.slice(0, rootIndex);
	let rightInorder = inorder.slice(rootIndex + 1);

	let leftPreorder = preorder.slice(1, rootIndex + 1);
	let rightPreorder = preorder.slice(rootIndex + 1);

	root.left = buildTree(leftPreorder, leftInorder);
	root.right = buildTree(rightPreorder, rightInorder);

	return root;
};
