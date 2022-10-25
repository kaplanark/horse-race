import screenWidth from '@utils/screenWidth'

describe('screenWidth.js', () => {
	const windowWidth = window.innerWidth;
	it('should return the window width', () => {
		expect(screenWidth).toEqual(windowWidth);
	});
});