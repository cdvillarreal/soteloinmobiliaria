import InputComponent from '../components/InputComponent';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import firebase from '../config/firebase';

const AddProperty = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = async data => {
		console.log('Data:', data);
		try {
			const document = await firebase.db.collection('propiedades').add({
				propertyTitle: data.propertyTitle,
				propertyDescription: data.propertyDescription,
				propertyPrice: data.propertyPrice,
				propertyPeriod: data.propertyPeriod,
				propertyType: data.propertyType,
				// propertyAddress: data.propertyAddress,
				// propertyCity: data.propertyCity,
				// propertyZip: data.propertyZip,
				// propertyState: data.propertyState,
				// propertyCountry: data.propertyCountry,
				// propertyLatitude: data.propertyLatitude,
				// propertyLongitude: data.propertyLongitude,
				// propertyImage: data.propertyImage,
				// propertyOwner: data.propertyOwner,
				// propertyOwnerEmail: data.propertyOwnerEmail,
				// propertyOwnerPhone: data.propertyOwnerPhone,
				// propertyOwnerAbout: data.propertyOwnerAbout,
			});
			console.log('Document:', document);
		} catch (error) {
			console.log('Error:', error);
		}
	};

	return (
		<>
			<h1 className='title'>Agregar una nueva propiedad</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputComponent
					type='text'
					name='propertyTitle'
					label='Título de la propiedad:'
					className='form-control'
					placeholder='Título que describa en pocas palabras la propiedad'
					autofocus
					register={{ ...register('propertyTitle', { required: true, minLength: 6 }) }}
				/>
				{errors.propertyTitle?.type === 'required' && (
					<span className='errorValidation'>La propiedad debe contar con un título.</span>
				)}
				{errors.propertyTitle?.type === 'minLength' && (
					<span className='errorValidation'>El título debe tener más de 6 (seis) caracteres.</span>
				)}
				<InputComponent
					type='textarea' //Ver como hacer que tenga varias filas y columnas.
					name='propertyDescription'
					label='Descripción:'
					className='form-control'
					register={{ ...register('propertyDescription', { required: true, minLength: 6 }) }}
				/>
				{errors.propertyDescription?.type === 'required' && (
					<span className='errorValidation'>La descripción de la propiedad es obligatoria.</span>
				)}
				{errors.propertyDescription?.type === 'minLength' && (
					<span className='errorValidation'>
						La descripción de la propiedad debe tener al menos 6 (seis) caracteres.
					</span>
				)}
				<InputComponent
					type='number'
					name='propertyPrice'
					label='Precio: $'
					className='form-control'
					register={{ ...register('propertyPrice') }}
					// Ver como validar el precio, que no sea menor a 0.
				/>
				<InputComponent
					type='text' //Cambiar por un select.
					name='propertyPeriod'
					label='Periodo de alquiler:'
					className='form-control'
					placeholder='(Por día, semana, mensual o venta)'
					register={{ ...register('propertyPeriod') }}
				/>
				<InputComponent
					type='text' //Cambiar por un select.
					name='propertyType'
					label='Tipo de propiedad:'
					className='form-control'
					placeholder='(Casa, departamento, terreno, etc.)'
					register={{ ...register('propertyType', { required: true }) }}
				/>
				{errors.propertyType?.type === 'required' && (
					<span className='errorValidation'>Se debe indicar el tipo de propiedad.</span>
				)}
				<div>
					<Button type='submit' className='btn btn-primary'>
						Guardar
					</Button>
				</div>
			</Form>
		</>
	);
};
export default AddProperty;
