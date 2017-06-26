import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Checkbox from './components/Checkbox.jsx';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Welcome to React</h2>
				</div>
				<p>Themed custom checkboxes</p>
				<div className="checkboxes">
					<Checkbox />
					<Checkbox theme="rounded green" />
					<Checkbox theme="red" />
					<Checkbox theme="bold" />
				</div>
			</div>
		);
	}
}

export default App;
