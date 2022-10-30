import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import Alert from '@components/Alert/Alert.vue';

describe('Alert.vue', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(Alert, {
			props: {
				variant: 'success',
				message: 'Test message',
				index: 0,
			}
		});
	});

	afterEach(() => {
		wrapper.unmount();
	});

	test('is correctly rendered', () => expect(wrapper.html()).toMatchSnapshot());

	test('renders props when passed', () => {
		expect(wrapper.props().variant).toBe('success');
		expect(wrapper.props().message).toBe('Test message');
		expect(wrapper.props().index).toBe(0);
	});

	test('renders the correct message', () => {
		expect(wrapper.get('.alert__content').text()).toBe('Test message');
	});

	test('renders the correct variant', () => {
		expect(wrapper.get('.alert').classes()).toContain('alert--success');
	});

	test('emits the correct event when the close button is clicked', async () => {
		wrapper.get('.alert__close').trigger('click');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted('close')).toBeTruthy();
	});

	test('emits the correct event when the close button is clicked', async () => {
		wrapper.get('.alert').trigger('click');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted('close')).toBeTruthy();
	});
});