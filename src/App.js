import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import PublicRoutes from './routes/PublicRoutes';
import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponent';

const App = () => {
	return (
		<BrowserRouter>
			<HeaderComponent />
			<Container>
				<PublicRoutes />
			</Container>
			{/* <FooterComponent /> */}
		</BrowserRouter>
	);
};

export default App;
