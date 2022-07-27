import { ChangeEvent, useEffect, useState } from 'react';

type FormElement = HTMLInputElement | HTMLTextAreaElement;

export const FormComponent = () => {
	const [formState, setFormState] = useState<{ name: string; email: string }>(
		{ name: '', email: '' }
	);

	const { name, email } = formState;

	const handleInputChange = ({
		target: { name, value },
	}: ChangeEvent<FormElement>) => {
		setFormState({ ...formState, [name]: value });
	};

	// TODO: Xq me realiza los 3 effect al principio de la carga del componente

	useEffect(() => console.log('Se carga el componente'), []);
	useEffect(() => console.log('Cambio en el formulario'), [formState]);
	useEffect(() => console.log('Cambio en el email'), [email]);

	return (
		<>
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
			</form>
		</>
	);
};
