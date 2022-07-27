import { memo } from 'react';

type Props = { value: string | number };

export const SmallComponent = memo(({ value }: Props) => {
	console.log('Me volví a llamar :(');

	return <small>{value}</small>;
});
