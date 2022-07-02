import { NavLink } from 'react-router-dom';

const NavBarComponent = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/propiedades'>
						Propiedades
					</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/nosotros'>
						Nosotros
					</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/contacto'>
						Contacto
					</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/usuarios'>
						Usuarios
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default NavBarComponent;
