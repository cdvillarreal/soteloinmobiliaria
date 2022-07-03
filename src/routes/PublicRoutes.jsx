import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PropertiesSalePage from '../pages/PropertiesSalePage';
import PropertiesAnnualRent from '../pages/PropertiesAnnualRent';
import PropertiesTemporaryRent from '../pages/PropertiesTemporaryRent';
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
			<Route path='/propiedades-venta' element={<PropertiesSalePage />} />
			<Route path='/propiedades-anual' element={<PropertiesAnnualRent />} />
			<Route path='/propiedades-temporario' element={<PropertiesTemporaryRent />} />
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
