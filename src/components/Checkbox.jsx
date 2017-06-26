import React, { Component } from 'react';
import classnames from 'classnames';

import './Checkbox.css';

class Checkbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: false
		};
	}

	render() {
		const { theme } = this.props;
		const { checked } = this.state;

		const classes = classnames('my-checkbox', theme, {
			checked
		});

		return <div className={ classes } onClick={ this._onClick.bind(this) } />;
	}

	_onClick() {
		this.setState({
			checked: !this.state.checked
		});
	}
}

export default Checkbox;
