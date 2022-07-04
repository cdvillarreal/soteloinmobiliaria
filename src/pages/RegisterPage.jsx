import InputComponent from '../components/InputComponent';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';

const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {};

	return (
		<>
			<h1 className='registerTitle'>Registro</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputComponent
					type='text'
					name='firstName'
					label='Nombre'
					className='form-control'
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
					label='Apellido'
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
					label='Email'
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
					label='Teléfono'
					className='form-control'
					register={{ ...register('tel', { required: true, pattern: /^\d{10}$/ }) }}
				/>
				{errors.tel?.type === 'pattern' && (
					<span className='errorValidation'>El teléfono no es válido.</span>
				)}
				<InputComponent
					type='text'
					name='user'
					label='Usuario'
					className='form-control'
					register={{ ...register('user', { required: true, minLength: 3 }) }}
				/>
				{errors.user?.type === 'required' && (
					<span className='errorValidation'>El usuario es requerido.</span>
				)}
				{errors.user?.type === 'minLength' && (
					<span className='errorValidation'>El usuario debe tener más de tres caracteres.</span>
				)}
				<InputComponent
					type='password'
					name='password'
					label='Contraseña'
					className='form-control'
					register={{ ...register('password', { required: true, minLength: 3 }) }}
				/>
				{errors.password?.type === 'required' && (
					<span className='errorValidation'>La contraseña es requerida.</span>
				)}
				{errors.password?.type === 'minLength' && (
					<span className='errorValidation'>La contraseña debe tener más de tres caracteres.</span>
				)}
				<div>
					<Button type='submit' className='btn btn-primary'>
						Registrarse
					</Button>
				</div>
			</Form>
		</>
	);
};

export default RegisterPage;
