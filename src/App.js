import { React } from 'react';
import './App.scss';
import NumberButton from './components/numberButton';
import numbers from './components/numbers';

const App = () => <div className="App">
	{ numbers.map(NumberButton) }</div>;

export default App;
