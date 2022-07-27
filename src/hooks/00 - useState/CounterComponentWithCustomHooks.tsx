import { useState } from 'react';
import useCounter from './useCounter';

type Props = {};

export const CounterComponentWithCustomHooks = () => {
	const { counter, incrementCounter, decrementCounter } = useCounter();
	return (
		<>
			<h2>Counter App with Custom Hooks</h2>

			<h4>Counter: {counter}</h4>

			<button onClick={incrementCounter}>Add Counter</button>
			<button onClick={decrementCounter}>Decrement Counter</button>
		</>
	);
};
