import { React } from 'react';
import './App.scss';
import data from './components/data.js';
import Box from './components/box';

const App = () => {
	// eslint-disable-next-line no-console
	console.log(data);
	const { people } = data;

	return (
		<div className="App">
			{people.map(Box)}
		</div>
	);
};

export default App;
