import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import SearchBar from '../../components/SearchBar';

test('should render SearchBar correctly', () => {
	const wrapper = shallow(<SearchBar />);
	expect(wrapper).toMatchSnapshot();
});

test('should set search on input change', () => {
	const value = 'Dogs';
	const wrapper = shallow(<SearchBar />);
	wrapper.find('FormControl').at(0).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('searchTerm')).toBe(value);
});

test('should set location on input change', () => {
	const value = 'San Jose, CA';
	const wrapper = shallow(<SearchBar />);
	wrapper.find('FormControl').at(0).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('searchTerm')).toBe(value);
});

