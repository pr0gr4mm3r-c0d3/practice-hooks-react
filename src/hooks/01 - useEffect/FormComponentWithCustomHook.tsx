import { useEffect } from 'react';
import useForm from './useForm';

export const FormComponentWithCustomHook = () => {
	const { formState, handleInputChange } = useForm();
	const { name, email, password } = formState;

	useEffect(() => {
		console.log('has estado tocando la password');
	}, [password]);

	return (
		<>
			<h2>useEffect Hook: SimpleForm App =={'>'} Custom Hooks</h2>

			<form>
				<input
					type='text'
					name='name'
					placeholder='Tu nombre'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
				<input
					type='email'
					name='email'
					placeholder='Tu email'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='Tu password'
					value={password}
					onChange={handleInputChange}
				/>
			</form>
		</>
	);
};
