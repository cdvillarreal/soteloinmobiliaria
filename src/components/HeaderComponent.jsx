import { Link } from 'react-router-dom';
import NavBarComponent from './NavBarComponent';
// import logo from '../assets/logo.png';

const HeaderComponent = () => {
	return (
		<header>
			<h1>
				<Link to='/'>{/* <img src={logo} alt='logo' /> */}</Link>
			</h1>
			<NavBarComponent />
		</header>
	);
};

export default HeaderComponent;
