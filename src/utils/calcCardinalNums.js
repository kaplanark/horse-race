export default function cardinalNumbers(param) {
	const arr = new Array(param);

	for (let i = 0; i < param; i++) {
		if (i === 0) arr[i] = '1st';
		if (i === 1) arr[i] = '2nd';
		if (i === 2) arr[i] = '3rd';
		if (i > 2) arr[i] = `${i + 1}th`;
	}
	return arr;
}