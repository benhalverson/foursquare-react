import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import SearchBar from '../../components/SearchBar';
const search = [
	{
		searchTerm: 'Dogs',
		location: 'San Jose, CA'
	}
];
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

xtest('should call onSubmit prop for valid form submission', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<SearchBar searchTerm={search[0]} onFormSubmit={onSubmitSpy} />);
	wrapper.find('Form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		searchTerm: search[0].searchTerm,
		location: search[0].location
	});
});
