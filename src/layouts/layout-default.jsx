import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { Outlet } from 'react-router-dom';
import React from 'react';

export const LayoutDefault = () => {
	return (
		<div className="">
			<HeaderComponent />
			<Outlet />
			<FooterComponent />
		</div>
	);
};
