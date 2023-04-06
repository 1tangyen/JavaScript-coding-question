// 114. Flatten Binary Tree to Linked List
// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.

var flatten = function(root) {
	if (!root) {
		return;
	}

	let stack = [ root ];
	let prev = null;

	while (stack.length > 0) {
		let curr = stack.pop();

		if (prev) {
			prev.right = curr;
			prev.left = null;
		}

		if (curr.right) {
			stack.push(curr.right);
		}

		if (curr.left) {
			stack.push(curr.left);
		}

		prev = curr;
	}
};
