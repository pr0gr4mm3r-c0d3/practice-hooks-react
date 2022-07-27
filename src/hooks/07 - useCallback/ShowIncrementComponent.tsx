import { memo } from 'react';

type Props = {
	incrementCounter: () => void;
};

export const ShowIncrementComponent = memo(({ incrementCounter }: Props) => {
	console.log('me Volvi a generar :(');

	return (
		<div>
			<button onClick={incrementCounter}>Increment Counter</button>
		</div>
	);
});
