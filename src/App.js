import { React } from 'react';
import './App.scss';
import data from './components/data.js';
import Box from './components/box';

const App = () => {
	const { people } = data;

	return <div className="App">
		{Box(people)}</div>;
};

export default App;
