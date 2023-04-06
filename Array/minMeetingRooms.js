function minMeetingRooms(intervals) {
	let starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b);

	let ends = intervals.map((interval) => interval[1]).sort((a, b) => a - b);

	let rooms = 0;
	let endIdx = 0;

	for (let i = 0; i < intervals.length; i++) {
		if (starts[i] < ends[endIdx]) {
			rooms++;
		} else {
			endIdx++;
		}
	}
	return rooms;
}
