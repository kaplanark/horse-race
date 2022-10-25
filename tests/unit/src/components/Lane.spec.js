import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Lane from '@components/Lane.vue';

describe('Lane.vue', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(Lane, {
			props: {
				horse: {
					run: true,
					travelledDistance: 210,
					color: '#3b302f',
				},
				laneNo: 1,
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


	test('renders props.horse when passed', () => {
		expect(wrapper.vm.horse).toBeTruthy();
		expect(wrapper.get('.horse').classes()).toContain('running');
		expect(wrapper.get('.horse').attributes('style')).toContain('--color-horse: #3b302f; margin-left: 210px;');
	});

	test('renders props.laneNo when passed', () => {
		expect(wrapper.vm.laneNo).toEqual(1);
		expect(wrapper.attributes('data-lane')).toEqual('1');
	});
});