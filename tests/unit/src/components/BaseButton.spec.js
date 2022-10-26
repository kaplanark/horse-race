import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseButton from '@components/Button/BaseButton.vue';

describe('BaseButton.vue', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(BaseButton, {
			props: {
				name: 'Button',
				variant: 'primary',
				disbaled: false
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

	test('renders props.name when passed', () => {
		expect(wrapper.text()).toContain('Button');
	});

	test('renders props.variant when passed', () => {
		expect(wrapper.classes()).toContain('btn--primary');
	});

	test('renders props.disabled when passed', () => {
		expect(wrapper.attributes('disabled')).toBeUndefined();
	});
});