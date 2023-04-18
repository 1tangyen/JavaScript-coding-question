var commonChars = function(words) {
	let result = [];
	let firstWord = words[0];
	for (let char of firstWord) {
		let isCommon = true;
		for (let i = 1; i < words.length; i++) {
			if (!words[i].includes(char)) {
				isCommon = false;
				break;
			}
			words[i] = words[i].replace(char, '');
		}
		if (isCommon) {
			result.push(char);
		}
	}
	return result;
};
