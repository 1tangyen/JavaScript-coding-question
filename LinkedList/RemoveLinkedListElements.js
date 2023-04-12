function removeElements(head, val) {
	// Handle cases where the head node matches the value
	while (head !== null && head.val === val) {
		head = head.next;
	}

	// Iterate through the rest of the list and remove matching nodes
	let curr = head;
	while (curr !== null && curr.next !== null) {
		if (curr.next.val === val) {
			curr.next = curr.next.next;
		} else {
			curr = curr.next;
		}
	}

	return head;
}
