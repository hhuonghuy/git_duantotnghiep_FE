import { AdminPage } from '../pages';
import { Navigate } from 'react-router-dom';

export const PrivateRouterAdmin = () => {
	const userInfo = JSON.parse(localStorage.getItem('user'));

	if (userInfo && userInfo.role === 1) {
		return <AdminPage />;
	}

	return <Navigate to="/" />;
};
