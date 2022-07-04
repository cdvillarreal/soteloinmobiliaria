import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';
import Container from 'react-bootstrap/Container';

const App = () => {
	return (
		<BrowserRouter>
			<NavBarComponent />
			<Container>
				<PublicRoutes />
			</Container>
			<FooterComponent />
		</BrowserRouter>
	);
};

export default App;
