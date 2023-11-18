import {
	AdminPage,
	DatHangPage,
	DatHangThanhCong,
	HomePage,
	LoginPage,
	PoloPage,
	ProductDetailPage,
	QuanShortPage,
	RegisterPage,
} from '../pages';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { LayoutDefault } from '../layouts';
import { PrivateRouterAdmin } from '../guards/auth-guards';
import React from 'react';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutDefault />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'login', element: <LoginPage /> },
			{ path: 'register', element: <RegisterPage /> },
			{ path: 'quan-short', element: <QuanShortPage /> },
			{ path: 'ao-polo', element: <PoloPage /> },
			{ path: 'detail', element: <ProductDetailPage /> },
			{ path: 'dat-hang', element: <DatHangPage /> },
			{ path: 'dat-hang-thanh-cong', element: <DatHangThanhCong /> },
			{
				path: 'admin',
				element: <PrivateRouterAdmin />,
				children: [
					{ index: true, element: <Navigate to={'/admin/dashboard'} /> },
					{ path: 'dashboard', element: <AdminPage /> },
				],
			},
		],
	},

	{ path: '*', element: <div>Not Found</div> },
]);
