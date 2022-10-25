import calcCardinalNums from "@utils/calcCardinalNums";

describe("calcCardinalNums.js", () => {
	it("should return an array of cardinal numbers", () => {
		const result = calcCardinalNums(4);
		expect(result).toEqual(['1st', '2nd', '3rd', '4th']);
	});
});