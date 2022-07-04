import { Link } from 'react-router-dom';
import { Navbar, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
	return (
		<Navbar>
			<Row>
				<Col>
					<p>Copyright &copy; 2022</p>
				</Col>
				<Col>
					<ul className='list-inline'>
						<li className='list-inline-item'>
							<Link to='/terminos'>Términos y Condiciones</Link>
						</li>
						<li className='list-inline-item'>
							<Link to='/politica-privacidad'>Política de privacidad</Link>
						</li>
					</ul>
				</Col>
			</Row>
		</Navbar>
	);
};
export default FooterComponent;
