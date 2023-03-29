//BFE.DEV 37. implement Binary Search (unique)
// You are given an unique & ascending array of integers, please search for its index with Binary Search.

// If not found, return -1

function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}
