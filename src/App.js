import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponent';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<HeaderComponent />
				<PublicRoutes />
				{/* <FooterComponent /> */}
			</BrowserRouter>
		</>
	);
};

export default App;
