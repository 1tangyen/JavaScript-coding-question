function invertTree(root) {
	if (!root) {
		return null;
	}

	let temp = root.left;
	root.right = invertTree(root.left);
	root.left = invertTree(temp);

	return root;
}
