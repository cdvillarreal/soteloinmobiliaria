import { Link } from 'react-router-dom';

const FooterComponent = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<p>Copyright &copy; 2022</p>
					</div>
					<div className='col-md-6'>
						<ul className='list-inline'>
							<li className='list-inline-item'>
								<Link to='/terminos'>Términos y Condiciones</Link>
							</li>
							<li className='list-inline-item'>
								<Link to='/politica-privacidad'>Política de privacidad</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default FooterComponent;
