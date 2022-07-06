import { Navbar, Nav, NavDropdown, Container, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const HeaderComponent = () => {
	return (
		<Navbar className='navBg' variant='dark' expand='lg'>
			<Container>
				<Navbar.Brand as={Link} to='/'>
					<img src='../assets/logo.jpg' alt='logo' className='logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link as={Link} to='/'>
							Inicio
						</Nav.Link>
						<NavDropdown title='Propiedades' id='basic-nav-dropdown'>
							<NavDropdown.Item as={Link} to='/propiedades'>
								Todas las prodiedades
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} to='/propiedades-venta'>
								En Venta
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to='/propiedades-anual'>
								Alquiler anual
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to='/propiedades-temporario'>
								Alquiler temporario
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to='/nosotros'>
							Nosotros
						</Nav.Link>
						<Nav.Link as={Link} to='/contacto'>
							Contacto
						</Nav.Link>
						<NavDropdown title='Usuarios' id='basic-nav-dropdown'>
							<NavDropdown.Item as={Link} to='/iniciar-sesion'>
								Iniciar Sesión
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to='/registro'>
								Registrarse
							</NavDropdown.Item>
							{/* <NavDropdown.Item as={Link} to='/'>
								Panel de Usuario
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to='/'>
								Cerrar Sesión
							</NavDropdown.Item> */}
						</NavDropdown>
						<NavDropdown title='Administración' id='basic-nav-dropdown'>
							<NavDropdown.Item as={Link} to='/admin/agregar-propiedad'>
								Agregar propiedad
							</NavDropdown.Item>
							{/* <NavDropdown.Item as={Link} to='/propiedades-anual'>
								Alquiler anual
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to='/propiedades-temporario'>
								Alquiler temporario
							</NavDropdown.Item> */}
						</NavDropdown>
					</Nav>
					<Form className='d-flex'>
						<FormControl type='search' placeholder='Buscar' className='me-2' aria-label='Search' />
						<Button variant='outline-primary'>Buscar</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default HeaderComponent;
