import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Select from '@components/Select/BaseSelect.vue';

describe('Select.vue', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(Select, {
			props: {
				options: ['option1', 'option2', 'option3'],
				value: 'option1',
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
});