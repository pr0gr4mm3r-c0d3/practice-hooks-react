import { useState, ChangeEvent } from 'react';

type FormElement = HTMLInputElement | HTMLTextAreaElement;

interface IFormState {
	name: string;
	email: string;
	password: string;
}

const useForm = () => {
	const [formState, setFormState] = useState<IFormState>({
		name: '',
		email: '',
		password: '',
	});

	const handleInputChange = ({
		target: { name, value },
	}: ChangeEvent<FormElement>) => {
		setFormState({ ...formState, [name]: value });
	};

	return {
		formState,
		handleInputChange,
	};
};

export default useForm;
