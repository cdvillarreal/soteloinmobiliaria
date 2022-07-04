import InputComponent from '../components/InputComponent';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {};

	return (
		<div className='mainLogin'>
			<h1 className='loginTitle'>Iniciar sesión</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputComponent
					name='username'
					label='Usuario:'
					className='form-control'
					placeholder='Usuario'
					autoFocus
					register={{ ...register('username', { required: true }) }}
				/>
				{errors.username && <span className='errorValidation'>El usuario es requerido.</span>}
				<InputComponent
					type='password'
					name='password'
					label='Contraseña:'
					className='form-control'
					placeholder='Contraseña'
					register={{ ...register('password', { required: true }) }}
				/>
				{errors.password && <span className='errorValidation'>La contraseña es requerida.</span>}
				<div>
					<Button type='submit' className='btn btn-primary'>
						Iniciar sesión
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default LoginPage;
