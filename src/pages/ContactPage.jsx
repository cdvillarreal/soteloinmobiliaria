import InputComponent from '../components/InputComponent';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ContactPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {};

	return (
		<>
			<h1 className='contactTitle'>Contacto</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputComponent
					type='text'
					name='name'
					label='Nombre:'
					className='form-control'
					register={{ ...register('name', { required: true, minLength: 3 }) }}
				/>
				{errors.name?.type === 'required' && (
					<span className='errorValidation'>El nombre es requerido.</span>
				)}
				{errors.name?.type === 'minLength' && (
					<span className='errorValidation'>El nombre debe tener más de tres caracteres.</span>
				)}
				<InputComponent
					type='email'
					name='email'
					label='E-mail:'
					className='form-control'
					register={{
						...register('email', {
							required: true,
							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
						}),
					}}
				/>
				{errors.email?.type === 'required' && (
					<span className='errorValidation'>El correo electrónico es requerido.</span>
				)}
				{errors.email?.type === 'pattern' && (
					<span className='errorValidation'>El formato del correo electrónico no es válido.</span>
				)}
				<InputComponent
					type='textarea'
					name='message'
					label='Mensaje:'
					className='form-control'
					rows='30'
					cols='30'
					register={{ ...register('message', { required: true }) }}
				/>
				{errors.message?.type === 'required' && (
					<span className='errorValidation'>El mensaje no puede estar vacío.</span>
				)}
				<div>
					<Button type='submit' className='btn btn-primary'>
						Enviar
					</Button>
				</div>
			</Form>
		</>
	);
};

export default ContactPage;
