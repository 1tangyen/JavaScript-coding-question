function isValid(s) {
	const stack = [];
	const open = [ '(', '{', '[' ];
	const close = [ ')', '}', ']' ];

	for (let i = 0; i < s.length; i++) {
		if (open.includes(s[i])) {
			stack.push(s[i]);
		} else if (close.includes(s[i])) {
			const index = close.indexOf(s[i]);
			if (stack.pop() !== open[index]) {
				return false;
			}
		}
	}
	return stack.length === 0;
}
