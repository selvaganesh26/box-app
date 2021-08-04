import { React } from 'react';
import context from '../core/context';

const NumberButton = (number) => <div>
	<button onClick={ () =>
		context.actions.setCount(number) }
	> { number } </button>
</div>;

export default NumberButton;
