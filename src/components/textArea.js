import { React } from 'react';
import context from '../core/context';

const TextArea = () =>
	<div className="input">
		<input
			onChange={ (evt) =>
				context.actions.setInput(evt.target.value) }
			type="text"
			size="20"
		/>

	</div>;

export default TextArea;
