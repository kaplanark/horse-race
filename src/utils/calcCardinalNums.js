// Cardinal value is calculated according to the incoming number.
function calcCardinalNumber(number) {
	let j = number % 10, k = number % 100;
	if (j == 1 && k != 11) {
		return number + "st";
	}
	if (j == 2 && k != 12) {
		return number + "nd";
	}
	if (j == 3 && k != 13) {
		return number + "rd";
	}
	return number + "th";
}
// According to the incoming number, the sequence of cardinal numbers up to that value is calculated.
export default function cardinalNumbers(param) {
	const resoult = [];
	for (let i = 0; i < param; i++) {
		const number = calcCardinalNumber(i + 1);
		resoult.push(number);
	}
	return resoult;
}
