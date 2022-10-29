import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Timer from '@components/Timer.vue';

describe('Timer.vue', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(Timer, {
			props: {
				time: 1000,
			}
		});
	});

	afterEach(() => {
		wrapper.unmount();
	});

	test('is correctly rendered', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should renders is page content is correct', () => {
		expect(wrapper.vm).toBeTruthy();
	});

	test('renders props.time when passed', () => {
		expect(wrapper.text()).toBe('0:01');
	});
});