import { useState } from 'react';
import useCounter from '../00 - useState/useCounter';
import { SmallComponent } from './SmallComponent';

export const MemorizeComponent = () => {
	const { counter, incrementCounter } = useCounter();

	const [show, setShow] = useState<boolean>(true);

	return (
		<>
			<h2>Memo</h2>
			<h4>
				Counter: <SmallComponent value={counter} />
			</h4>

			<button onClick={incrementCounter}>Increment Counter</button>

			<button onClick={() => setShow(!show)}>
				Show/Hide {JSON.stringify(show)}{' '}
			</button>
		</>
	);
};
