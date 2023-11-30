// MyRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Landingpage from '../pages/Landingpage';

const MyRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Landingpage />} />
			</Routes>
		</Router>
	);
};

export default MyRoutes;
