/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import TextArea from './components/textArea';
import context from './core/context.js';

const App = () => {
	console.log(context.state);

	return <div className="App">{ TextArea() }</div>;
};

export default App;
