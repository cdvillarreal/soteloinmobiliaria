import { Form, Col, Row } from 'react-bootstrap';

const InputComponent = props => {
	const { type, name, label, className, rows, cols, placeholder, register } = props;
	return (
		<>
			<Form.Group as={Row} className='mb-2' controlId={name}>
				<Form.Label column sm='2'>
					{label}
				</Form.Label>
				<Col sm='4'>
					<Form.Control
						type={type}
						name={name}
						label={label}
						className={className}
						rows={rows}
						cols={cols}
						placeholder={placeholder}
						{...register}
					/>
				</Col>
			</Form.Group>
		</>
	);
};

export default InputComponent;
