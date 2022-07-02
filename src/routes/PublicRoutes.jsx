import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PropertiesPage from '../pages/PropertiesPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsOfUsePage from '../pages/TermsOfUsePage';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/propiedades' element={<PropertiesPage />} />
			<Route path='/nosotros' element={<AboutPage />} />
			<Route path='/contacto' element={<ContactPage />} />
			<Route path='/iniciar-sesion' element={<LoginPage />} />
			<Route path='/registro' element={<RegisterPage />} />
			<Route path='/politica-privacidad' element={<PrivacyPolicyPage />} />
			<Route path='/terminos' element={<TermsOfUsePage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
};

export default PublicRoutes;
