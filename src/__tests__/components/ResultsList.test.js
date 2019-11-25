import React from 'react';
import { shallow } from 'enzyme';
import ResultsList from '../../components/ResultsList';

test('should render ResultsList correctly', () => {
	const wrapper = shallow(<ResultsList/>);
	expect(wrapper).toMatchSnapshot();
});

