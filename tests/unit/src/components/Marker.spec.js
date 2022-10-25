import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Marker from '@components/Marker.vue';

describe('Marker.vue', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(Marker, {
			props: {
				postion: 'left',
				text: 'Speed',
				count: '10km/sec',
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

	test('renders props.postion when passed', () => {
		expect(wrapper.classes()).toContain('marker--left');
	});

	test('renders props.text when passed', () => {
		expect(wrapper.get('.marker__text').text()).toBe('Speed');
	});

	test('renders props.count when passed', () => {
		expect(wrapper.get('.marker__count').text()).toBe('10km/sec');
	});
});