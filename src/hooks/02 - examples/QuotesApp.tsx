import useCounter from '../00 - useState/useCounter';
import useFetch, { IDataBlockquote } from './useFetch';

export const QuotesApp = () => {
	const { counter, incrementCounter } = useCounter(1);

	const { loading, data, error } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);
	const { author, quote } = (!!data && data[0]) as IDataBlockquote;
	return (
		<>
			<h3>Example CustomHook useFetch</h3>

			{loading ? (
				<>
					<div>Loading...</div>
				</>
			) : (
				<>
					{error ? (
						<>
							<h5>{error}</h5>

							<button onClick={incrementCounter}>
								Reintentar
							</button>
						</>
					) : (
						<>
							<blockquote>{quote}</blockquote>

							<p>Author: {author}</p>

							<button onClick={incrementCounter}>
								Siguiente
							</button>
						</>
					)}
				</>
			)}
		</>
	);
};
