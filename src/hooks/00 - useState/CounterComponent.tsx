import { useState } from 'react';

type Props = {};

export const CounterComponent = () => {
	const [stateCounter, setStateCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
		counter4: 40,
		counter5: 50,
	});

	const { counter1, counter2 } = stateCounter;

	const incrementCounter1 = () =>
		setStateCounter({ ...stateCounter, counter1: counter1 + 1 });
	return (
		<>
			<h2>Counter App</h2>

			<h4>Counter 1: {counter1}</h4>
			<h4>Counter 2: {counter2}</h4>

			<button onClick={incrementCounter1}>Add Counter</button>
		</>
	);
};
