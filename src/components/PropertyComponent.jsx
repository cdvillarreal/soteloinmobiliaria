import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';

const PropertyComponent = props => {
	const { data } = props;
	return (
		<Col>
			<Card style={{ width: '18rem' }}>
				{/* <Card.Img variant='top' src={data.image} /> */}
				<Card.Body>
					<Card.Title>{data.propertyTitle}</Card.Title>
					<Card.Text>{data.propertyDescription}</Card.Text>
					<Card.Text>${data.propertyPrice}</Card.Text>
					<Card.Text>{data.propertyPeriod}</Card.Text>
					<Button as={Link} to={`/property/${data.id}`} variant='primary'>
						Ver detalles
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default PropertyComponent;
