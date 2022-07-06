import { useState, useEffect } from 'react';
import { getAllProperties } from '../services/Services';
import PropertyComponent from '../components/PropertyComponent';
import Row from 'react-bootstrap/Row';

const AllPropertiesPage = () => {
	const [loading, setLoading] = useState(true);
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		const request = async () => {
			try {
				const response = await getAllProperties();
				console.log('Response ', response);
				setProperties(response);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		request();
	}, []);

	if (loading) {
		return (
			<>
				<div className='loading'>Cargando...</div>
			</>
		);
	} else {
		return (
			<>
				<h1 className='title'>Todas las propiedades</h1>
				<Row>
					{properties.map(propertyData => (
						<PropertyComponent data={{ ...propertyData.data(), ...{ id: propertyData.id } }} />
					))}
				</Row>
			</>
		);
	}
};

export default AllPropertiesPage;
