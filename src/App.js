import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import HeaderComponent from './components/HeaderComponent';
import firebase from './config/firebase';

const App = () => {
	console.log(firebase);
	return (
		<>
			<BrowserRouter>
				<HeaderComponent />
				<PublicRoutes />
			</BrowserRouter>
		</>
	);
};

export default App;
