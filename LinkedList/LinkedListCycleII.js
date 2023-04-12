function detectCycle(head) {
	// Step 1: Find the intersection point of the slow and fast pointers
	let slow = head;
	let fast = head;
	let intersect = null;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			intersect = slow;
			break;
		}
	}

	// Step 2: Find the node at which the cycle begins
	if (intersect) {
		let ptr1 = head;
		let ptr2 = intersect;
		while (ptr1 !== ptr2) {
			ptr1 = ptr1.next;
			ptr2 = ptr2.next;
		}
		return ptr1;
	}

	// No cycle found
	return null;
}
