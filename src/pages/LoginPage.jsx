import InputComponent from '../components/InputComponent';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import firebase from '../config/firebase';

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = async data => {
		console.log('data', data);
		try {
			const responseUser = await firebase.auth.signInWithEmailAndPassword(
				data.email,
				data.password
			);
			console.log(responseUser.user.uid);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className='mainLogin'>
			<h1 className='title'>Iniciar sesión</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
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
					type='password'
					name='password'
					label='Contraseña:'
					className='form-control'
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
