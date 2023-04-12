var isAnagram = function(s, t) {
	if (s.length !== t.length) {
		return false;
	}

	let freq = {};

	for (let i = 0; i < s.length; i++) {
		if (freq[s[i]]) {
			freq[s[i]]++;
		} else {
			freq[s[i]] = 1;
		}
	}

	for (let j = 0; j < t.length; j++) {
		if (!freq[t[j]]) {
			return false;
		}
		freq[t[j]]--;
	}
	return true;
};
