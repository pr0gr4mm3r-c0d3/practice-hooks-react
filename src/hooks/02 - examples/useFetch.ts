import { useState, useEffect } from 'react';

export interface IDataBlockquote {
	author: string;
	quote: string;
}

interface IState {
	loading: boolean;
	data: IDataBlockquote[] | null;
	error: string | null;
}
const INITIAL_STATE = { loading: true, data: null, error: null };

const useFetch = (url: string) => {
	const [state, setState] = useState<IState>(INITIAL_STATE);

	useEffect(() => {
		setState(INITIAL_STATE);

		fetch(url)
			.then((res) => res.json())
			.then(
				(data) =>
					setState({ ...INITIAL_STATE, loading: false, data: data }),
				(err) => {
					setState({
						...INITIAL_STATE,
						loading: false,
						error: 'Revisa tu conexión de Internet',
					}),
						console.log(err);
				}
			);
	}, [url]);

	return state;
};

export default useFetch;
