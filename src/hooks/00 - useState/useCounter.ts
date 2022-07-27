import { useState } from 'react';
const useCounter = (initialState = 10) => {
	const [counter, setCounter] = useState(initialState);

	const incrementCounter = () => setCounter(counter + 1);

	const decrementCounter = () => setCounter(counter - 1);
	return {
		counter,
		incrementCounter,
		decrementCounter,
	};
};

export default useCounter;
