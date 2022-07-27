import { useMemo, useState } from 'react';

import useCounter from '../00 - useState/useCounter';
import { processStrong } from './helpers';

export const MemoHookComponent = () => {
	const { counter, incrementCounter } = useCounter(200);

	const [show, setShow] = useState<boolean>(true);

	const memoProcessStrong = useMemo(() => processStrong(counter), [counter]);

	return (
		<>
			<h2>Memo Hook Component</h2>
			<h4>
				Counter: <small>{counter}</small>
			</h4>

			<button onClick={incrementCounter}>Increment Counter</button>

			<button onClick={() => setShow(!show)}>
				Show/Hide {JSON.stringify(show)}{' '}
			</button>

			<p>{memoProcessStrong}</p>
		</>
	);
};
