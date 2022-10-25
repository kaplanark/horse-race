import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Loader from '@components/Loader/Loader.vue';

describe('Loader.vue', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(Loader, {
			props: {
				status: true,
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
	test('renders props.status when passed', () => {
		expect(wrapper.classes()).toContain('loader--active');
	});
});