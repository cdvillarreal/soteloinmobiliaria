import InputComponent from '../components/InputComponent';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import firebase from '../config/firebase';

const RegisterPage = () => {
	const [message, setMessage] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = async data => {
		console.log('Data:', data);
		const resetForm = () => {
			setMessage('Usuario registrado con éxito!!');
			// No sé como resetear el formulario o redireccionar a la página de inicio de sesión.
		};
		try {
			const responseUser = await firebase.auth.createUserWithEmailAndPassword(
				data.email,
				data.password
			);
			console.log('Response:', responseUser.user.uid);
			resetForm();
			if (responseUser.user.uid) {
				const document = await firebase.db.collection('usuarios').add({
					name: data.firstName,
					lastName: data.lastName,
					tel: data.tel,
					userId: responseUser.user.uid,
				});
				console.log('Document:', document);
			}
		} catch (error) {
			console.log('Error:', error);
		}
	};

	return (
		<>
			<h1 className='title'>Registro de usuarios</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputComponent
					type='text'
					name='firstName'
					label='Nombre:'
					className='form-control'
					autofocus
					register={{ ...register('firstName', { required: true, minLength: 3 }) }}
				/>
				{errors.firstName?.type === 'required' && (
					<span className='errorValidation'>El nombre es requerido.</span>
				)}
				{errors.firstName?.type === 'minLength' && (
					<span className='errorValidation'>El nombre debe tener más de tres caracteres.</span>
				)}
				<InputComponent
					type='text'
					name='lastName'
					label='Apellido:'
					className='form-control'
					register={{ ...register('lastName', { required: true, minLength: 3 }) }}
				/>
				{errors.lastName?.type === 'required' && (
					<span className='errorValidation'>El apellido es requerido.</span>
				)}
				{errors.lastName?.type === 'minLength' && (
					<span className='errorValidation'>El apellido debe tener más de tres caracteres.</span>
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
					<span className='errorValidation'>El correo electrónico no es válido.</span>
				)}
				<InputComponent
					type='tel'
					name='tel'
					label='Teléfono:'
					className='form-control'
					placeholder='Sin 0 y sin 15.'
					register={{ ...register('tel', { required: true, pattern: /^\d{10}$/ }) }}
				/>
				{errors.tel?.type === 'pattern' && (
					<span className='errorValidation'>El teléfono no es válido.</span>
				)}
				<InputComponent
					type='password'
					name='password'
					label='Contraseña:'
					className='form-control'
					placeholder='Mínimo: 6 caracteres.'
					register={{ ...register('password', { required: true, minLength: 6 }) }}
				/>
				{errors.password?.type === 'required' && (
					<span className='errorValidation'>La contraseña es requerida.</span>
				)}
				{errors.password?.type === 'minLength' && (
					<span className='errorValidation'>La contraseña debe tener más de seis caracteres.</span>
				)}
				<div>
					<Button type='submit' className='btn btn-primary'>
						Registrarse
					</Button>
				</div>
				<div className='message'>{message}</div>
			</Form>
		</>
	);
};

export default RegisterPage;
