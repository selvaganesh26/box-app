/* eslint-disable react/destructuring-assignment */

import { React } from 'react';
import Box from './person';

const People = (people) => {
	const count = people.length;

	return <div>.
		<div>{ people.map(Box) }</div>
		<div>People Count : { count } </div>
	</div>;
};

export default People;
