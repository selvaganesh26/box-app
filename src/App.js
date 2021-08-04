/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import NumberButton from './components/numberButton';
import numbers from './components/numbers';
import context from './core/context.js';

const App = () => <div className="App">
	{ numbers.map(NumberButton) }
	{ context.state.count }</div>;

export default App;
