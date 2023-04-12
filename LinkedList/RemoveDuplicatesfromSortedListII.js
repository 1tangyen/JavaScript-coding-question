function deleteDuplicates(head) {
	// Handle empty and single-node lists
	if (!head || !head.next) {
		return head;
	}

	// Use a dummy node as the head of the new list
	const dummy = new ListNode(null, head);

	// Initialize pointers for previous, current, and next nodes
	let prev = dummy;
	let curr = head;
	let next = head.next;

	// Iterate through the list
	while (curr && next) {
		// Check if the current node has a duplicate value
		if (curr.val === next.val) {
			// Keep iterating until we reach the end of the duplicates
			while (next && curr.val === next.val) {
				next = next.next;
			}
			// Remove the duplicates by updating the previous node's next pointer
			prev.next = next;
			// Update the current and next pointers for the next iteration
			curr = next;
			if (next) {
				next = next.next;
			}
		} else {
			// No duplicates, move on to the next nodes
			prev = curr;
			curr = next;
			next = next.next;
		}
	}

	// Return the head of the new list
	return dummy.next;
}
