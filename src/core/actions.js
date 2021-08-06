const setCount = ({ data }) => ({
	count: data,
});
const setInput = ({ data }) => ({ input: data });

const actions = {
	setCount,
	setInput,
};

export default actions;
