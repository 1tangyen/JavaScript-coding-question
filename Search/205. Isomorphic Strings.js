var isIsomorphic = function(s, t) {
	if (s.length !== t.length) {
		return false;
	}

	const mapS = new Map();
	const mapT = new Map();

	for (let i = 0; i < s.length; i++) {
		const charS = s[i];
		const charT = t[i];

		if (!mapS.has(charS)) {
			mapS.set(charS, charT);
		} else {
			if (mapS.get(charS) !== charT) {
				return false;
			}
		}

		if (!mapT.has(charT)) {
			mapT.set(charT, charS);
		} else {
			if (mapT.get(charT) !== charS) {
				return false;
			}
		}
	}

	return true;
};
