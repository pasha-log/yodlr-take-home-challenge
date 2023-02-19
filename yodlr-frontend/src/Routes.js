import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import AdminPage from './AdminPage';

const YodlrRoutes = ({ createNewUser }) => {
	return (
		<Routes>
			<Route exact path="/admin" element={<AdminPage />} />
			<Route exact path="/" element={<RegistrationForm createNewUser={createNewUser} />} />
		</Routes>
	);
};

export default YodlrRoutes;
