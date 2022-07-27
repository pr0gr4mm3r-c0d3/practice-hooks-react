import { useCallback, useState } from 'react';

import useCounter from '../00 - useState/useCounter';
import { ShowIncrementComponent } from './ShowIncrementComponent';

export const CallbackHookComponent = () => {
	const [counter, setCounter] = useState<number>(10);

	// const increment = () => setCounter(counter + 1);
	const increment = useCallback(() => {
		setCounter((c) => c + 1);
	}, [setCounter]);

	return (
		<>
			<h2>useCallback Hook</h2>
			<h4>Counter: {counter}</h4>

			<ShowIncrementComponent incrementCounter={increment} />
		</>
	);
};
