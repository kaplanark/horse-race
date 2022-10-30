import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ColorPicker from '@components/ColorPicker.vue';

describe('ColorPicker.vue', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(ColorPicker, {
			props: {
				name: 'color',
				value: '#000000',
			}
		});
	});

	afterEach(() => {
		wrapper.unmount();
	});

	test('is correctly rendered', () => expect(wrapper.html()).toMatchSnapshot());

	test('is correctly rendered with a value', () => {
		expect(wrapper.get('input').element.value).toBe('#000000');
		expect(wrapper.get('.color-picker__content').text()).toBe('#000000');
	});

	test('is correctly rendered with a name', () => {
		wrapper.setProps({ name: 'color' });
		expect(wrapper.get('input').element.name).toBe('color');
	});

	test('emits the correct event when the input is changed', async () => {
		const input = wrapper.get('input');
		await input.setValue('#ffffff');
		await wrapper.get('input').trigger('change');
		expect(wrapper.emitted('update:value')).toBeTruthy();
	});
});
