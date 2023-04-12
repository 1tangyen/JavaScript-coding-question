function middleNode(head) {
	// Create two pointers, one that moves one node at a time, and another that moves two nodes at a time
	let slow = head;
	let fast = head;

	// Iterate through the linked list until the fast pointer reaches the end
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// Return the middle node
	return slow;
}
