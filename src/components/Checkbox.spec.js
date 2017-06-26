import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox.jsx';

const THEME = 'rounded green';

describe('A Checkbox component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Checkbox />);
	});

	describe('When rendered', () => {
		it('Should be NOT checked by default', () => {
			expect(component.prop('className')).to.equal('my-checkbox');
		});

		describe('and a theme is passed as prop', () => {
			beforeEach(() => {
				component = shallow(<Checkbox theme={ THEME } />);
			});

			it('Should add the theme CSS class', () => {
				expect(component.prop('className')).to.equal(`my-checkbox ${ THEME }`);
			});
		});
	});

	describe('When clicked', () => {
		it('Should be rendered with the .checked CSS class', () => {
			component.simulate('click');

			expect(component.prop('className')).to.equal('my-checkbox checked');
		});
	});
});
