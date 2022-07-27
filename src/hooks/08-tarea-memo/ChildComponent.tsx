import { memo } from 'react';

type Props = {
	num: number;
	increment: (num: number) => void;
};

export const ChildComponent = memo(({ num, increment }: Props) => {
	console.log('  Me volví a generar :(  ');

	return (
		<button className='btn btn-primary mr-3' onClick={() => increment(num)}>
			{num}
		</button>
	);
});
