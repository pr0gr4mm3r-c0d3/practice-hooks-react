import { useCallback, useState } from 'react';

import { ChildComponent } from './ChildComponent';

export const FatherComponent = () => {
	const numbers = [2, 4, 6, 8, 10];
	const [value, setValue] = useState(0);

	// const increment = (num: number) => {
	// 	setValue(value + num);
	// };

	const increment = useCallback(
		(num: number) => setValue((value) => value + num),
		[setValue]
	);

	return (
		<div>
			<h2>Father Component</h2>
			<p> Total: {value} </p>

			<hr />

			{numbers.map((n) => (
				<ChildComponent key={n} num={n} increment={increment} />
			))}
		</div>
	);
};
